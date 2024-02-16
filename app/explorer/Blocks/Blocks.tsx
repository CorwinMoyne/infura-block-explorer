import { getBlocks } from "../../actions";
import { BlocksGrid } from "./BlocksGrid";

/**
 * Blocks wrapper
 * 
 * @returns JSX.Element
 */
const Blocks = async () => {
  const blocks = await getBlocks();

  return <BlocksGrid initialBlocks={blocks} />;
};

export default Blocks;
