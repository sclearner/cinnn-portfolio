import React from "react";
import clsx from "clsx";

export function MaterialButton({
  className,
  children,
  onClick,
  padding = "px-4 py-2",
  mode = "primary",
  isTonal = false,
}) {
  return (
    <button
      // className={`rounded-full bg-${mode} px-4 py-2 font-semibold text-on-${mode}`}
      className={clsx(
        className,
        "rounded-full",
        !isTonal && `bg-${mode}`,
        padding,
        "font-semibold",
        isTonal ? `text-on-${mode}-tonal` : `text-on-${mode}`,
        isTonal && `border-on-${mode}-tonal border-2`,
        'hover:brightness-90 active:brightness-75'
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
