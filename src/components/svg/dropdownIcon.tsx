import React from "react";
interface iProps {
  className?: string;
}

function DropdownIcon(props: iProps): JSX.Element {
  const { className } = props;
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512s256-114.6 256-256S397.4 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z" />
    </svg>
  );
}

DropdownIcon.defaultProps = {
  className: "",
};

export default DropdownIcon;
