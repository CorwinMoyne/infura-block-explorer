import { useState } from "react";
import { usePopper } from "react-popper";

interface PopoverProps {
  referenceElement: HTMLDivElement | null;
  children: React.ReactNode;
}

const Popover = ({ referenceElement, children }: PopoverProps) => {
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );
  const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null);

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [
      { name: "arrow", options: { element: arrowElement } },
      {
        name: "offset",
        options: {
          offset: [200, -20],
        },
      },
    ],
  });

  return (
    <div
      id="popover"
      className="relative"
      ref={setPopperElement}
      style={styles.popper}
      {...attributes.popper}
      role="tooltip"
    >
      {children}
      <div id="arrow"/>
    </div>
  );
};

export default Popover;
