import React from "react";
import { AchievementTitle } from "./components/title";

export function AchievementSection() {
  return (
    <div id="achievement">
      <section className="flex px-[100px] p-[50px] justify-center gap-[45px]">
           <AchievementTitle />     
      </section>
    </div>
  );
}
