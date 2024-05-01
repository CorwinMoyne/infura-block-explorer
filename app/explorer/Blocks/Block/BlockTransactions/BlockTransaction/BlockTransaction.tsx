"use client";

import { getTransactionData } from "@/app/actions";
import Popover from "@/components/Popover/Popover";
import { updateTransaction } from "@/lib/features/blockSlice";
import { useAppDispatch } from "@/lib/store";
import { ITransaction } from "@/types";
import { currencyFormatter } from "@/utils/currencyFormatter/currencyFormatter";
import { useEffect, useState } from "react";
import { useDebounce } from "../../../../../../hooks/useDebounce";
// @ts-ignore
import MiddleEllipsis from "react-middle-ellipsis";

interface BlockTransactionProps {
  blockHash: string;
  transaction: ITransaction;
}

/**
 * The transaction component
 *
 * @param blockHash   The block hash
 * @param transaction The block transaction
 * @returns JSX.Element
 */
const BlockTransaction = ({
  blockHash,
  transaction,
}: BlockTransactionProps) => {
  const [referenceElement, setReferenceElement] =
    useState<HTMLDivElement | null>(null);
  const [currentElement, setCurrentElement] = useState<
    (EventTarget & Element) | null
  >(null);

  // Debounce the current element being set to prevent unnecessary server calls
  const debouncedElement = useDebounce(currentElement, 250);

  const dispatch = useAppDispatch();

  useEffect(() => {
    // Make the transaction spin when getting data
    referenceElement?.classList.add("animate-spin");
    // Get the transaction data when the element is being hovered
    async function getTransaction() {
      if (debouncedElement) {
        try {
          const transactionData = await getTransactionData(transaction.hash);
          if (transactionData) {
            dispatch(
              updateTransaction({
                hash: blockHash,
                transaction: transactionData,
              })
            );
          }
        } catch (error) {
          console.error(error);
        }
      }
      referenceElement?.classList.remove("animate-spin");
    }
    getTransaction();
  }, [debouncedElement]);

  /**
   * Handles the mouse entering the transaction element
   *
   * @param event Mouse event
   */
  async function handleMouseEnter(event: React.MouseEvent) {
    setCurrentElement(event.currentTarget);
  }

  /**
   * Handles the mouse leaving the transaction element
   */
  function handleMouseLeave() {
    setCurrentElement(null);
  }

  return (
    <>
      <div
        ref={setReferenceElement}
        className={`w-4 h-4 ${
          transaction.to ? "bg-kimberly-200" : "bg-kimberly-400"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        data-testid="block-transaction"
      />
      {!!debouncedElement && transaction.to && (
        <Popover referenceElement={referenceElement}>
          <div className="bg-white text-sm gap-2 p-4 grid">
            <div className="flex space-x-2">
              <div>
                <div className="text-gray-500">FROM</div>
                <div className="text-kimberly-900 font-semibold whitespace-nowrap w-40">
                  <MiddleEllipsis>
                    <span>{transaction.from}</span>
                  </MiddleEllipsis>
                </div>
              </div>
              <div>
                <div className="text-gray-500">TO</div>
                <div className="text-kimberly-900 font-semibold whitespace-nowrap w-40">
                  <MiddleEllipsis>
                    <span>{transaction.to}</span>
                  </MiddleEllipsis>
                </div>
              </div>
            </div>
            <div>
              <div className="text-gray-500">VALUE</div>
              <div className="flex space-x-2 text-kimberly-900 font-semibold">
                <div>{transaction.ethValue} ETH</div>
                <div>
                  {currencyFormatter.format(Number(transaction.dollarValue))}
                </div>
                <div>@</div>
                <div>
                  {currencyFormatter.format(Number(transaction.exchangeRate))}
                </div>
              </div>
            </div>
          </div>
        </Popover>
      )}
    </>
  );
};

export default BlockTransaction;
