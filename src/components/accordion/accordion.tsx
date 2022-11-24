import React, { useState } from "react";
import DropdownIcon from "../svg/dropdownIcon";
import "./accordion.scss";

interface iProps {
  className?: string;
  heading: string;
  children: React.ReactElement;
}

function Accordion(props: iProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { className, heading, children } = props;
  return (
    <div className={`accordionContainer ${className}`}>
      <div
        className="accordionHeaderWrapper"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p>{heading}</p>
        <DropdownIcon className={`dropdownIcon ${isOpen && "isOpen"}`} />
      </div>
      <div className={`accordionBodyWrapper ${isOpen && "isOpen"}`}>
        {children}
      </div>
    </div>
  );
}

export default Accordion;
