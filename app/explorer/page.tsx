import dynamic from "next/dynamic";
import { Suspense } from "react";
import { BlocksLoadingSkeleton } from "./Blocks";
import { Header, HeaderLoadingSkeleton } from "./Header";

const NoSSRBlocks = dynamic(() => import("./Blocks/Blocks"), { ssr: false });

const Explorer = () => {
  return (
    <section>
      <Suspense fallback={<HeaderLoadingSkeleton />}>
        <Header />
      </Suspense>

      <Suspense fallback={<BlocksLoadingSkeleton />}>
        <NoSSRBlocks />
      </Suspense>
    </section>
  );
};

export default Explorer;
