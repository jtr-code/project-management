"use client";

import React, { useState } from "react";
import ProjectHeader from "@/app/projects/ProjectHeader";
// import Board from "../BoardView";
// import List from "../ListView";
// import Timeline from "../TimelineView";
// import Table from "../TableView";
// import ModalNewTask from "@/components/ModalNewTask";

type Props = {
  params: { id: string };
};

const Project = ({ params }: Props) => {
  const { id } = params;
  const [activeTab, setActiveTab] = useState("Board");
  const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);

  return (
    <div>
      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default Project;
