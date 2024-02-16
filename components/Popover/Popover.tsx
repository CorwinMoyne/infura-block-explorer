import { useState } from "react";
import { createPortal } from "react-dom";
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
    <>
      {createPortal(
        <div
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
        >
          {children}
          <div id="arrow"/>
        </div>,
        document.body
      )}
    </>
  );
};

export default Popover;
