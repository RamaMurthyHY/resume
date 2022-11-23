import React from "react";
import "./button.scss";

interface iProps {
  className?: string;
  name: string;
  onClick?: () => void;
}

function Button(props: iProps): JSX.Element {
  const { className, name, onClick } = props;
  return (
    <button className={`buttonStyle ${className}`} onClick={onClick}>
      {name}
    </button>
  );
}

Button.defaultProps = {
  className: "",
};

export default Button;
