import React from "react";
import { AboutSubsection } from "./components/intro";
import { AboutMeAvatar } from "./components/avatar";

export function AboutMeSection() {
  return (
    <div id="about">
      <section className="flex flex-col max-lg:gap-2 lg:flex-row px-[10px] sm:px-[50px] py-[25px] lg:px-[100px] lg:py-[50px] justify-between items-center lg:justify-right lg:gap-[45px]">
        <AboutMeAvatar />
        <AboutSubsection />
      </section>
    </div>
  );
}
