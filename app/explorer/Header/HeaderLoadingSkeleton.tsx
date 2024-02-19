/**
 * A loading skeleton for the explorer page header
 *
 * @returns JSX.Element
 */
const HeaderLoadingSkeleton = () => {
  return (
    <section className="bg-primary-dark w-full h-[456px] sm:h-[263px] lg:h-[180px]">
      <div className="max-w-7xl px-10 py-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-14">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="w-[215px] h-[60px] animate-pulse">
            <div className="bg-gray-300 h-full w-full rounded-sm" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeaderLoadingSkeleton;
