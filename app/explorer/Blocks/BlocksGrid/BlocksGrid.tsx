"use client";

import { getBlocks } from "@/app/actions";
import { IBlock } from "@/types";
import { useState } from "react";
import { Block } from "../Block";

interface BlocksGridProps {
  initialBlocks: IBlock[];
}

const BlocksGrid = ({ initialBlocks }: BlocksGridProps) => {
  const [blocks, setBlocks] = useState(initialBlocks);

  async function loadMoreBlocks() {
    const lastBlock = blocks[blocks.length - 1];
    const newBlocks = await getBlocks(lastBlock.number);
    setBlocks((prev) => prev.concat(newBlocks));
  }

  return (
    <>
      <div
        className="blocks grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-14 px-10 py-14 w-full place-items-center max-w-7xl"
        data-testid="explorer-blocks"
      >
        {blocks.map((block) => (
          <Block key={block.number} block={block} />
        ))}
      </div>
      <div className="flex justify-center w-full">
        <button
          className="shadow-md rounded-full px-4 py-2 bg-kimberly-700 hover:bg-kimberley-900 text-kimberly-200 uppercase"
          onClick={loadMoreBlocks}
        >
          Load More
        </button>
      </div>
    </>
  );
};

export default BlocksGrid;
