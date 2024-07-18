import React from "react";

export function MaterialButton({ children, onClick, mode="primary" }) {

  return (
    <button
      className={`rounded-full bg-${mode} px-4 py-2 font-semibold text-on-${mode}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
