"use client";

import { getBlocks, getLatestBlocks } from "@/app/actions";
import {
  pushBlocks,
  selectBlocks,
  setBlocks,
  unshiftBlocks,
} from "@/lib/features/blockSlice";
import { useAppDispatch, useAppSelector } from "@/lib/store";
import { IBlock } from "@/types";
import { useEffect, useRef, useState } from "react";
import { Block } from "../Block";

interface BlocksGridProps {
  initialBlocks: IBlock[];
}

/**
 * The block grid
 *
 * @param initialBlocks The initial blocks from the server
 * @returns JSX.Element
 */
const BlocksGrid = ({ initialBlocks }: BlocksGridProps) => {
  const dispatch = useAppDispatch();
  
  const blocks = useAppSelector(selectBlocks);

  const [isLoading, setIsLoading] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [gridWidth, setGridWidth] = useState<number | undefined>();


  // const [hoverRef, hovering] = useHover();

  const intervalId = useRef<NodeJS.Timeout | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    dispatch(setBlocks(initialBlocks));
  }, [initialBlocks]);

  /**
   * Updates the blocks by adding the latest ones
   */
  async function updateBlocks() {
    const newestBlockNumber = blocks[0].number;
    const updatedBlocks = await getLatestBlocks(newestBlockNumber);
    dispatch(unshiftBlocks(updatedBlocks));
  }

  useEffect(() => {
    // If the user is not hovering over a block, update the blocks every 10 secs
    if (!isHovering) {
      intervalId.current = setInterval(() => {
        updateBlocks();
      }, 10000);
    } else {
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
      intervalId.current = null;
    }

    return () => {
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
    };
  }, [isHovering, intervalId.current]);

  /**
   * Loads the next 12 blocks
   */
  async function loadMoreBlocks() {
    try {
      setIsLoading(true);
      const lastBlock = blocks[blocks.length - 1];
      const newBlocks = await getBlocks(lastBlock.number);
      dispatch(pushBlocks(newBlocks));
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  /**
   * Set the grid width so the load more btn is always centered under it
   */
  function getGridWidth() {
    setGridWidth(ref.current?.offsetWidth);
  }

  useEffect(() => {
    getGridWidth();

    window.addEventListener("resize", getGridWidth);

    return () => window.removeEventListener("resize", getGridWidth);
  }, []);

  return (
    <section
      className="px-10 py-14 grid gap-5 max-h-[900px] overflow-x-auto"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        ref={ref}
        className="blocks grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-14 w-full place-items-center max-w-7xl"
        data-testid="explorer-blocks"
      >
        {blocks.map((block) => (
          <Block key={block.number} block={block} />
        ))}
      </div>
      <div style={{ width: `${gridWidth}px` }} className="flex justify-center">
        {isLoading ? (
          <div className="text-white">Loading more blocks...</div>
        ) : (
          <button
            className="shadow-md rounded-full px-4 py-2 bg-kimberly-700 hover:bg-kimberley-900 text-kimberly-200 uppercase"
            onClick={loadMoreBlocks}
          >
            Load More
          </button>
        )}
      </div>
    </section>
  );
};

export default BlocksGrid;
