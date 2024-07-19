import React from "react";
import { ProjectTitle } from "./components/title";

export function ProjectSection() {
  return (
    <div id="project">
      <section className="flex px-[100px] p-[50px] justify-center gap-[45px]">
           <ProjectTitle />     
      </section>
    </div>
  );
}
