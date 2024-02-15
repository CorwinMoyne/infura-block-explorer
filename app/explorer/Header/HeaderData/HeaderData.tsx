import React from "react";

interface HeaderDataProps {
  children: React.ReactNode;
  size?: "large" | "small";
}

/**
 * Explorer header data
 *
 * @param children React children
 * @param size     The size of the text
 * @returns JSX.Element
 */
const HeaderData = ({ children, size = "large" }: HeaderDataProps) => {
  return (
    <div
      className={`${
        size === "large"
          ? "text-4xl xl:text-5xl"
          : "text-sm flex items-end leading-6"
      }`}
    >
      {children}
    </div>
  );
};

export default HeaderData;
