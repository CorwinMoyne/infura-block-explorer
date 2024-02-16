import React from "react";
import { BlockTransaction } from "./BlockTransaction";

interface BlockTransactionsProps {
  transactions: string[];
}

/**
 * The transaction grid
 * 
 * @param The block transactions 
 * @returns JSX.Element
 */
const BlockTransactions = ({ transactions }: BlockTransactionsProps) => {
  return (
    <div className="grid grid-cols-10 gap-[0.6rem] px-3 py-4 min-h-[272px] content-start">
      {transactions.map((transaction) => (
        <React.Fragment key={transaction}>
          {<BlockTransaction hash={transaction} />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default BlockTransactions;
