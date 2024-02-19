import { Suspense } from "react";
import { Blocks, BlocksLoadingSkeleton } from "./Blocks";
import { Header, HeaderLoadingSkeleton } from "./Header";

const Explorer = () => {
  return (
    <section className="ml-12 sm:ml-24">
      <Suspense fallback={<HeaderLoadingSkeleton />}>
        <Header />
      </Suspense>

      <Suspense fallback={<BlocksLoadingSkeleton />}>
        <Blocks />
      </Suspense>
    </section>
  );
};

export default Explorer;
