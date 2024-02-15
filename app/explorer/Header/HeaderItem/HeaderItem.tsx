import React from "react";

interface HeaderItemProps {
  text: string;
  children: React.ReactNode;
}

/**
 * Explorer header item
 * 
 * @param text     The text to display 
 * @param children React children 
 * @returns JSX.Element
 */
const HeaderItem = ({ text, children }: HeaderItemProps) => {
  return (
    <div className="grid gap-1">
      <div className="uppercase text-sm">{text}</div>
      <div className="text-white text-4xl">{children}</div>
    </div>
  );
};

export default HeaderItem;
