import React from "react";
import { ProjectTitle } from "./components/title";
import { ProjectList } from "./components/project-list";

export function ProjectSection() {
  return (
    <div id="project">
      <section className="flex flex-col max-lg:gap-4 px-[10px] py-[25px] lg:px-[100px] lg:py-[50px] items-center gap-[45px]  min-h-[80vh]">
           <ProjectTitle />
           <ProjectList /> 
      </section>
    </div>
  );
}
