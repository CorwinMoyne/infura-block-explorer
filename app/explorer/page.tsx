import { Suspense } from "react";
import { Header, HeaderLoadingSkeleton } from "./Header";

const Explorer = async () => {
  return (
    <section>
      <Suspense fallback={<HeaderLoadingSkeleton />}>
        <Header />
      </Suspense>
    </section>
  );
};

export default Explorer;
