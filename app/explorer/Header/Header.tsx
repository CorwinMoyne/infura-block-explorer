import { getGasPrice, getLatestBlock } from "@/app/actions";
import { toCommaSeparated } from "@/utils/toCommaSeparated/toCommaSeparated";
import { HeaderData } from "./HeaderData";
import { HeaderItem } from "./HeaderItem";

/**
 * The explorer page header
 *
 * @returns JSX.Element
 */
const Header = async () => {
  const [currentBlockNumber, averageGasPrice] = await Promise.all([
    getLatestBlock(),
    getGasPrice(),
  ]);

  return (
    <section className="bg-primary-dark w-full" data-testid="explorer-header">
      <div className="max-w-7xl grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-14 px-10 py-14">
        <HeaderItem text="current block">
          <HeaderData>{toCommaSeparated(currentBlockNumber)}</HeaderData>
        </HeaderItem>

        <HeaderItem text="average gas price">
          <div className="flex space-x-1" data-testid="averageGasPrice">
            <HeaderData>{averageGasPrice}</HeaderData>
            <HeaderData size="small">gwei</HeaderData>
          </div>
        </HeaderItem>

        <HeaderItem text="average block size">
          <div className="flex" data-testid="averageBlockSize">
            <HeaderData>8.2</HeaderData>
            <HeaderData size="small">mgas</HeaderData>
          </div>
        </HeaderItem>

        <HeaderItem text="average block fullness">
          <HeaderData>88%</HeaderData>
        </HeaderItem>
      </div>
    </section>
  );
};

export default Header;
