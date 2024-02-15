import { getGasPrice, getLatestBlock } from "../actions";
import { Header } from "./Header";

const Explorer = async () => {

  const [currentBlockNumber, averageGasPrice] = await Promise.all([getLatestBlock(), getGasPrice()]);  

  return (
    <section>
      <div className="p-8">
        <Header currentBlockNumber={currentBlockNumber} averageGasPrice={averageGasPrice} />
      </div>
    </section>
  );
};

export default Explorer;
