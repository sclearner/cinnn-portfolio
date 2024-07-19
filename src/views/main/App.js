import React from "react";

import { Navbar } from "@v/navbar/navbar";
import { FirstSection } from "@v/first/first";
import { AboutMeSection } from "../about-me/about-me";
import { AchievementSection } from "../cert/achievement";
import { ExperienceSection } from "../experience/experience";
import { ProjectSection } from "../project/project";
import { CommentSection } from "../comment/comment";
import { ContactSection } from "../contact/contact";
import { Footer } from "../footer/footer";

function App() {
  return (
    <>
      <Navbar />
      <FirstSection />
      <AboutMeSection />
      <AchievementSection />
      <ExperienceSection />
      <ProjectSection />
      <CommentSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
