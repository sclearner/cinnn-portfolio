import React from "react";
import { ContactTitle } from "./components/intro";
import { ContactCard } from "./components/card";
import { ContactForm } from "./components/form";

export function ContactSection() {
  const [ready, setReady] = React.useState(false)
  const card = React.useRef();

  React.useLayoutEffect(() => {
    setReady(card.current != null);
  }, [card.current])

  return (
    <div id="contact" className="bg-primary">
      <section className="flex flex-col px-[100px] p-[50px] justify-right gap-[45px] items-center">
        <ContactTitle />
        <div className="flex justify-center gap-[30px] w-full flex-wrap">
          <ContactCard ref={card}/>
          {ready && <ContactForm card={card}/>}
        </div>
      </section>
    </div>
  );
}
