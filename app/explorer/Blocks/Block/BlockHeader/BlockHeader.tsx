import { durationFromDate, toCommaSeparated } from "@/utils";

interface BlockHeaderProps {
  blockNumber: bigint;
  noOfTransactions: number;
  timestamp: bigint;
}

/**
 * The block header
 * 
 * @param blockNumber      The block number
 * @param noOfTransactions The no of transactions on the block
 * @param timestamp        The block timestamp
 * @returns JSX.Element
 */
const BlockHeader = ({ blockNumber, noOfTransactions, timestamp }: BlockHeaderProps) => {
  return (
    <div className="flex justify-between">
      <div className="grid gap-1">
        <div>#{toCommaSeparated(blockNumber.toString())}</div>
        <div className="flex space-x-3 text-sm" data-testid="block-header-timestamp">
          <span>mined</span>
          <span>{durationFromDate(timestamp.toString())} </span><span>ago</span>
        </div>
      </div>

      <div className="flex space-x-3" data-testid="block-header-transactions">
        <span>{noOfTransactions}</span>
        <span>TXs</span>
      </div>
    </div>
  );
};

export default BlockHeader;
