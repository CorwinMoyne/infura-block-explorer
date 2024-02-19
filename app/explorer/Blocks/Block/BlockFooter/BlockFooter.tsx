import { IoIosPlay } from "react-icons/io";

interface BlockFooterProps {
  noOfTransactions: number;
}


/**
 * The block footer
 * 
 * @param noOfTransactions The number of extra transactions in the block
 * @returns 
 */
const BlockFooter = ({ noOfTransactions }: BlockFooterProps) => {
  return (
    <section className="border-t-[1px] border-kimberly-400" data-testid="block-footer">
      <div className="text-sm flex justify-between items-center pl-3">
        <div className="flex space-x-1" data-testid="footer-tx">
          <span>{noOfTransactions}&nbsp;</span>
          <span>MORE&nbsp;</span>
          <span>TX</span>
        </div>

        <button className="bg-kimberly-400 flex justify-center items-center w-8 h-8">
          <IoIosPlay className="w-4 h-4 text-kimberly-700" />
        </button>
      </div>
    </section>
  );
};

export default BlockFooter;
