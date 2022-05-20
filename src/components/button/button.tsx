import React from "react";
import "./button.scss";

interface iProps {
  className?: string;
  name: string;
}

function Button(props: iProps): JSX.Element {
  const { className, name } = props;
  return <button className={`buttonStyle ${className}`}>{name}</button>;
}

Button.defaultProps = {
  className: "",
};

export default Button;
