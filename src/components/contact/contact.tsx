import React from "react";
import PageHeading from "components/page-heading/pageHeading";

interface iProps {
  className?: string;
}

function Contact(props: iProps): JSX.Element {
  const { className } = props;
  return (
    <div className={`${className}`}>
      <PageHeading heading="Portfolio" />
    </div>
  );
}

Contact.defaultProps = {
  className: "",
};

export default Contact;
