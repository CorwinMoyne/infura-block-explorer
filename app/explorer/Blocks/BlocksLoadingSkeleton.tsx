import { INITIAL_NUMBER_OF_BLOCKS } from "@/constants";

const BlocksLoadingSkeleton = () => {
  return (
    <section className="grid gap-5 mt-[456px] sm:mt-[263px] lg:mt-[180px]">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-14 w-full place-items-center max-w-7xl px-10 py-14 ">
        {Array.from({ length: INITIAL_NUMBER_OF_BLOCKS }).map((_, index) => (
          <div
            key={index}
            className="text-kimberly-100 bg-kimberly-700 grid gap-4 shadow-md"
          >
            <div className="border-b-[1px] border-kimberly-400">
              <div className="py-4 px-3 w-full flex justify-between">
                <div className="grid gap-1">
                  <div className="w-[90px] h-[20px] animate-pulse">
                    <div className="bg-gray-300 h-full w-full rounded-sm" />
                  </div>
                  <div
                    className="flex space-x-3 text-sm"
                    data-testid="block-header-timestamp"
                  >
                    <div className="w-[110px] h-[20px] animate-pulse">
                      <div className="bg-gray-300 h-full w-full rounded-sm" />
                    </div>
                  </div>
                </div>

                <div
                  className="flex space-x-3"
                  data-testid="block-header-transactions"
                >
                  <div className="w-[50px] h-[20px] animate-pulse">
                    <div className="bg-gray-300 h-full w-full rounded-sm" />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-10 gap-[0.6rem] px-3 pb-4 min-h-[272px] content-start">
              {Array.from({ length: 25 }).map((_, index) => (
                <div key={index} className="w-4 h-4 bg-gray-300 animate-pulse" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlocksLoadingSkeleton;
