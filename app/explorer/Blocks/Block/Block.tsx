import { IBlock } from "@/types";
import { BlockFooter } from "./BlockFooter";
import { BlockHeader } from "./BlockHeader";
import { BlockTransactions } from "./BlockTransactions";

interface BlockProps {
  block: IBlock;
}

/**
 * A block component that forms part of the block grid
 *
 * @param block The block
 * @returns JSX.Element
 */
const Block = ({ block }: BlockProps) => {
  return (
    <div className="grid-block text-kimberly-100 bg-kimberly-700 shadow-md min-h-[390px]" data-testid="block">
      <BlockHeader
        blockNumber={block.number}
        noOfTransactions={block.transactions?.length}
        timestamp={block.timestamp}
      />
      <BlockTransactions
        transactions={block.transactions?.slice().splice(0, 100)}
      />
      {block.transactions?.length > 100 && (
        <BlockFooter noOfTransactions={block.transactions?.length - 100} />
      )}
    </div>
  );
};

export default Block;
