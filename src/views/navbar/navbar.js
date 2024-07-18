import React from "react";
import { HomeButton } from "./components/home-button";
import { Tabbar } from "./components/tabbar";
import { ContactButton } from "./components/contact-button";

export function Navbar() {
  return (<nav className="sticky top-0 bg-background flex py-2 xl:px-20 z-50">
    <HomeButton />
    <Tabbar />
    <ContactButton />
  </nav>);
}
