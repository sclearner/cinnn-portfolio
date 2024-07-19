import React from "react";
import { AboutSubsection } from "./components/intro";
import { AboutMeAvatar } from "./components/avatar";

export function AboutMeSection() {
  return (
    <div id="about">
      <section className="flex px-[100px] p-[50px] justify-right gap-[45px]">
        <AboutMeAvatar />
        <AboutSubsection />
      </section>
    </div>
  );
}
