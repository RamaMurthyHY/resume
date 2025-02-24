import React from "react";
interface iProps {
  className?: string;
}

function Briefcase(props: iProps): JSX.Element {
  const { className } = props;
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M320 336c0 8.844-7.156 16-16 16h-96C199.2 352 192 344.8 192 336V288H0v144C0 457.6 22.41 480 48 480h416c25.59 0 48-22.41 48-48V288h-192V336zM464 96H384V48C384 22.41 361.6 0 336 0h-160C150.4 0 128 22.41 128 48V96H48C22.41 96 0 118.4 0 144V256h512V144C512 118.4 489.6 96 464 96zM336 96h-160V48h160V96z" />
    </svg>
  );
}

Briefcase.defaultProps = {
  className: "",
};

export default Briefcase;
