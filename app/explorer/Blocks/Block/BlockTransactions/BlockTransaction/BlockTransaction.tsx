"use client";

import { getTransactionData } from "@/app/actions";
import Popover from "@/components/Popover/Popover";
import { useDebounce } from "@/hooks/useDebouce";
import { ITransaction } from "@/types";
import { currencyFormatter } from "@/utils/currencyFormatter/currencyFormatter";
import { useEffect, useState } from "react";
// @ts-ignore
import MiddleEllipsis from "react-middle-ellipsis";

interface BlockTransactionProps {
  hash: string;
}

/**
 * The transaction component
 *
 * @param hash The transaction hash
 * @returns JSX.Element
 */
const BlockTransaction = ({ hash }: BlockTransactionProps) => {
  const [currentHash, setCurrentHash] = useState<string | undefined>("");
  const [transactionData, setTransactionData] = useState<
    ITransaction | undefined
  >();
  const [referenceElement, setReferenceElement] =
    useState<HTMLDivElement | null>(null);
  const [currentElement, setCurrentElement] = useState<
    (EventTarget & Element) | null
  >(null);
  const [cachedTransactions, setCachedTransactions] = useState<ITransaction[]>(
    []
  );

  /**
   * Returns true if the transaction is in the cache
   * 
   * @returns boolean
   */
  function isInCache() {
    return (
      cachedTransactions.find(
        (transaction) => transaction.hash === currentHash
      ) !== undefined
    );
  }

  // Debounce the current element being set to prevent unnecessary server calls
  const debouncedElement = useDebounce(currentElement, 500);

  useEffect(() => {
    // Get the transaction data when the element is active
    async function getTransaction() {
      if (debouncedElement) {
        // Search cache for transaction
        const foundTransaction = cachedTransactions.find(
          (transaction) => transaction.hash === currentHash
        );
        if (foundTransaction) {
          setTransactionData(foundTransaction);
        } else {
          const transactionData = await getTransactionData(currentHash);
          if (transactionData) {
            setTransactionData(transactionData);
            // Add transaction to cache
            const copy = [...cachedTransactions];
            copy.push(transactionData);
            setCachedTransactions(copy);
          }
        }
      }
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
    setCurrentHash(hash);
  }

  /**
   * Handles the mouse leaving the transaction element
   */
  function handleMouseLeave() {
    setCurrentElement(null);
    setTransactionData(undefined);
  }

  return (
    <>
      <div
        ref={setReferenceElement}
        className={`w-4 h-4 ${isInCache() ? "bg-kimberly-200" : "bg-kimberly-400"}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        role="tooltip"
        data-testid="block-transaction"
      />
      {!!debouncedElement && transactionData && (
        <Popover referenceElement={referenceElement}>
          <div className="bg-white text-sm gap-2 p-4 grid">
            <div className="flex space-x-2">
              <div>
                <div className="text-gray-500">FROM</div>
                <div className="text-kimberly-900 font-semibold whitespace-nowrap w-40">
                  <MiddleEllipsis>
                    <span>{transactionData.from}</span>
                  </MiddleEllipsis>
                </div>
              </div>
              <div>
                <div className="text-gray-500">TO</div>
                <div className="text-kimberly-900 font-semibold whitespace-nowrap w-40">
                  <MiddleEllipsis>
                    <span>{transactionData.to}</span>
                  </MiddleEllipsis>
                </div>
              </div>
            </div>
            <div>
              <div className="text-gray-500">VALUE</div>
              <div className="flex space-x-2 text-kimberly-900 font-semibold">
                <div>{transactionData.ethValue} ETH</div>
                <div>
                  {currencyFormatter.format(
                    Number(transactionData.dollarValue)
                  )}
                </div>
                <div>@</div>
                <div>
                  {currencyFormatter.format(
                    Number(transactionData.exchangeRate)
                  )}
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
