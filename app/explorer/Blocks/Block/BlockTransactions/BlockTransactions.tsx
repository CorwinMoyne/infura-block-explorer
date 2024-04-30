import { ITransaction } from "@/types/block";
import React from "react";
import { BlockTransaction } from "./BlockTransaction";

interface BlockTransactionsProps {
  blockHash: string;
  transactions: ITransaction[];
}

/**
 * The transaction grid
 *
 * @param blockHash    The block hash
 * @param transactions The block transactions
 * @returns JSX.Element
 */
const BlockTransactions = ({
  blockHash,
  transactions,
}: BlockTransactionsProps) => {
  return (
    <div
      className="grid grid-cols-10 gap-[0.6rem] px-3 py-4 min-h-[272px] content-start"
      data-testid="block-transactions"
    >
      {transactions.map((transaction) => (
        <React.Fragment key={transaction.hash}>
          {<BlockTransaction blockHash={blockHash} transaction={transaction} />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default BlockTransactions;
