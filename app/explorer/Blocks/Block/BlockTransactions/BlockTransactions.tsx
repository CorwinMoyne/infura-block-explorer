import React from "react";
import { BlockTransaction } from "./BlockTransaction";

interface BlockTransactionsProps {
  transactions: string[];
}

const BlockTransactions = ({ transactions }: BlockTransactionsProps) => {
  return (
    <div className="grid grid-cols-10 gap-[0.6rem] px-3 pb-4">
      {transactions.map((transaction) => (
        <React.Fragment key={transaction}>
          {<BlockTransaction transaction={transaction} />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default BlockTransactions;
