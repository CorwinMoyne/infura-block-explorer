import { Block } from "@/types";
import { BlockHeader } from "./BlockHeader";
import { BlockTransactions } from "./BlockTransactions";

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
    <div className="grid-block text-kimberly-100 bg-kimberly-700 grid gap-4 shadow-md">
      <BlockHeader
        blockNumber={block.number}
        noOfTransactions={block.transactions.length}
        timestamp={block.timestamp}
      />
      <BlockTransactions transactions={block.transactions.splice(0, 100)} />
    </div>
  );
};

export default Block;

