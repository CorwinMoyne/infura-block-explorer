import { getBlocks } from "../../actions";
import { BlocksGrid } from "./BlocksGrid";

const Blocks = async () => {
  const blocks = await getBlocks();

  return <BlocksGrid initialBlocks={blocks} />;
};

export default Blocks;
