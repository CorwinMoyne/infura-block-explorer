import { getBlocks } from "../../actions";
import { Block } from "./Block";

const Blocks = async () => {
  const blocks = await getBlocks();

  return (
    <div
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-14 px-10 py-14 w-full"
      data-testid="explorer-blocks"
    >
      {blocks.map((block) => (
        <Block key={block.number} block={block} />
      ))}
    </div>
  );
};

export default Blocks;
