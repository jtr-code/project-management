import { Project } from "@/state/api";
import React from "react";

type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => {
  return (
    <div className="rounded border p-4 shadow">
      <h3 className="dark:text-white">{project.name}</h3>
      <p className="dark:text-white" >{project.description}</p>
      <p className="dark:text-white">Start Date: {project.startDate}</p>
      <p className="dark:text-white">End Date: {project.endDate}</p>
    </div>
  );
};

export default ProjectCard;
