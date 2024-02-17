import { durationFromDate, toCommaSeparated } from "@/utils";

interface BlockHeaderProps {
  blockNumber: string;
  noOfTransactions: number;
  timestamp: string;
}

/**
 * The block header
 *
 * @param blockNumber      The block number
 * @param noOfTransactions The no of transactions on the block
 * @param timestamp        The block timestamp
 * @returns JSX.Element
 */
const BlockHeader = ({
  blockNumber,
  noOfTransactions,
  timestamp,
}: BlockHeaderProps) => {
  return (
    <div className="border-b-[1px] border-kimberly-400" suppressHydrationWarning={true}>
      <div className="py-4 px-3 w-full flex justify-between">
        <div>
          <div>#{toCommaSeparated(blockNumber.toString())}</div>
          <div
            className="flex space-x-3 text-sm"
            data-testid="block-header-timestamp"
          >
            <span>mined</span>
            <span>{durationFromDate(timestamp.toString())} </span>
            <span>ago</span>
          </div>
        </div>

        <div className="flex space-x-3" data-testid="block-header-transactions">
          <span>{noOfTransactions}</span>
          <span>TXs</span>
        </div>
      </div>
    </div>
  );
};

export default BlockHeader;
