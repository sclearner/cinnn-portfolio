import React from "react";
import { ProjectTitle } from "./components/title";
import { ProjectList } from "./components/project-list";

export function ProjectSection() {
  return (
    <div id="project">
      <section className="flex flex-col px-[100px] p-[50px] items-center gap-[45px]  min-h-[80vh]">
           <ProjectTitle />
           <ProjectList /> 
      </section>
    </div>
  );
}
