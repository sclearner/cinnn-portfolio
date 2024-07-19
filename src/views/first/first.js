import React from "react";
import { IntroSubsection } from "./components/intro";
import { FirstAvatar } from "./components/avatar";

export function FirstSection() {
  return (
    <div id="first">
      <section className="flex px-[100px] py-[50px] justify-between items-center">
        <IntroSubsection />
        <FirstAvatar />
      </section>
    </div>
  );
}
