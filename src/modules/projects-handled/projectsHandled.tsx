import React from "react";
import "./projectsHandled.scss";
import PageHeading from "../../components/page-heading/pageHeading";
import Accordion from "../../components/accordion/accordion";
import { projectsHandled } from "./constants";

interface iProps {
  className?: string;
}

function ProjectsHandled(props: iProps): JSX.Element {
  const { className } = props;
  return (
    <div className={`projectsHandled${className}`}>
      <PageHeading heading="Projects Handled" />
      <p className="pageSubHeading">
        With my last experience I have handled the following properties
      </p>
      {projectsHandled.map((project) => (
        <Accordion
          className="accordionCust"
          heading={`Project - ${project.title}`}
        >
          <div>
            <p className="specifications">
              <span className="specificationKey">Role -</span>
              <span>{project.role}</span>{" "}
            </p>
            <p className="specifications">
              <span className="specificationKey">Skills used -</span>
              <span>{project.skills}</span>
            </p>
            <p className="specifications">
              <span className="specificationKey">Description -</span>
              <p>{project.description}</p>
            </p>
          </div>
        </Accordion>
      ))}
    </div>
  );
}

ProjectsHandled.defaultProps = {
  className: "",
};

export default ProjectsHandled;
