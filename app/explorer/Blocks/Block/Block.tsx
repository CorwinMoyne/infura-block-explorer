import { Block } from "@/types";
import { BlockHeader } from "./BlockHeader";

interface BlockProps {
  block: Block;
}

/**
 * A block component that forms part of the block grid
 * 
 * @param block The block
 * @returns JSX.Element
 */
const Block = ({ block }: BlockProps) => {
  return (
    <div className="text-kimberly-100 bg-kimberly-700 p-4">
      <BlockHeader
        blockNumber={block.number}
        noOfTransactions={block.transactions.length}
        timestamp={block.timestamp}
      />
    </div>
  );
};

export default Block;
