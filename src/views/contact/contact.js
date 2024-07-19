import React from "react";
import { ContactTitle } from "./components/intro";

export function ContactSection() {
  return (
    <div id="contact" className="bg-primary">
      <section className="flex flex-col px-[100px] p-[50px] justify-right gap-[45px] items-center">
        <ContactTitle />
      </section>
    </div>
  );
}
