import React from "react";
import { AchievementTitle } from "./components/title";

export function AchievementSection() {
  return (
    <div id="achievement">
      {/* flex flex-col max-lg:gap-2 lg:flex-row px-[10px] sm:px-[50px] py-[25px] lg:px-[100px] lg:py-[50px] justify-between items-center lg:justify-right lg:gap-[45px] */}
      <section className="flex px-[10px] sm:px-[50px] py-[25px] lg:px-[100px] lg:py-[50px] justify-center">
           <AchievementTitle />     
      </section>
    </div>
  );
}
