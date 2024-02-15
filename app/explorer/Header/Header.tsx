import { HeaderData } from "./HeaderData";
import { HeaderItem } from "./HeaderItem";

interface HeaderProps {
  currentBlockNumber?: string;
  averageGasPrice?: number;
}

/**
 * The explorer page header
 *
 * @param currentBlockNumber The current block number
 * @param averageGasPrice    The average gas price
 * @returns JSX.Element
 */
const Header = ({ currentBlockNumber, averageGasPrice }: HeaderProps) => {
  return (
    <section
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-14 bg-primary-dark px-10 py-14 w-full"
      data-testid="explorer-header"
    >
      <HeaderItem text="current block">
        <HeaderData>
          {Number(currentBlockNumber)?.toLocaleString("en-GB")}
        </HeaderData>
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
    </section>
  );
};

export default Header;
