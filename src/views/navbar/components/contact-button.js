import React from "react";
import { MaterialButton } from "@v/components/button";

export function ContactButton() {
  function handleClick() {
    window.location.assign("#contact");
  }

  return (
    <MaterialButton
      className="block max-md:w-0 max-md:p-0 overflow-hidden md:w-auto transition-all whitespace-nowrap"
      mode="primary"
      onClick={handleClick}
    >
      <p className="block">Liên hệ ngay</p>
    </MaterialButton>
  );
}
