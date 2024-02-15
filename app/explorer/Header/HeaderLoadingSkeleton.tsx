

/**
 * A loading skeleton for the explorer page header
 * 
 * @returns JSX.Element
 */
const HeaderLoadingSkeleton = () => {
  return (
    <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-14 bg-primary-dark px-10 py-14 w-full">
      <>
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="w-[215px] h-[60px] animate-pulse">
            <div className="bg-gray-300 h-full w-full rounded-sm" />
          </div>
        ))}
      </>
    </section>
  );
};

export default HeaderLoadingSkeleton;
