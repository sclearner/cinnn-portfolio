import React from "react";
import { ExperienceTitle } from "./components/intro";
import { CompanyList } from "./components/list";

export function ExperienceSection() {
  return (
    <div id="experience" className="bg-primary">
      <section className="flex flex-col max-lg:gap-4 px-[10px] py-[25px] lg:px-[100px] lg:py-[50px] justify-right gap-[45px] items-center max-sm:items-stretch">
        <ExperienceTitle />
        <CompanyList />
      </section>
    </div>
  );
}
