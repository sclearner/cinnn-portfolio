import React from "react";
import { ExperienceTitle } from "./components/intro";
import { CompanyList } from "./components/list";

export function ExperienceSection() {
  return (
    <div id="experience" className="bg-primary">
      <section className="flex flex-col px-[100px] p-[50px] justify-right gap-[45px] items-center">
        <ExperienceTitle />
        <CompanyList />
      </section>
    </div>
  );
}
