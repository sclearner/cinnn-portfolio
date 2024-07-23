import React from "react";
import { IntroSubsection } from "./components/intro";
import { FirstAvatar } from "./components/avatar";

export function FirstSection() {
  return (
    <div id="first">
      <section className="flex flex-col-reverse max-lg:gap-2 lg:flex-row px-[10px] py-[25px] lg:px-[100px] lg:py-[50px] justify-between items-center">
        <IntroSubsection />
        <FirstAvatar />
      </section>
    </div>
  );
}
