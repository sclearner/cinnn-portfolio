import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import React from "react";
import { MaterialButton } from "~/views/components/button";

export function Tabbar() {
  const [expand, setExpand] = React.useState(false);
  const [isSmall, setIsSmall] = React.useState(window.innerWidth <= 640);

  React.useLayoutEffect(() => {
    function setSize(e) {
      const isSmall = window.innerWidth <= 640;
      setIsSmall((current) => {
        if (!current && isSmall) setExpand(false);
        return isSmall;
      });
    }

    window.addEventListener("resize", setSize, false);

    return () => {
      window.removeEventListener("resize", setSize);
    };
  }, [isSmall]);

  function toggle() {
    setExpand((b) => !b);
  }

  return (
    <>
      {isSmall && (
        <div className="grow self-center text-end">
          <FontAwesomeIcon className="text-2xl text-primary hover:brightness-90 active:brightness-75" icon={faBars} onClick={toggle}/>
        </div>
      )}
      <div className={
        clsx(
          "col-start-1 col-end-3 justify-end items-center",
          "overflow-hidden transition-height",
          "sm:grow flex max-sm:flex-col",
          "sm:gap-10",
          "xl:px-7 md:px-4",
          isSmall && (expand ? "h-fit" : "h-0") 
        )
      }>
        {isSmall && <div className="h-2"></div>}
        <Tab href="#first">Trang chủ</Tab>
        <Tab href="#about">Về tôi</Tab>
        <Tab href="#achievement">Thành tựu</Tab>
        <Tab href="#project">Dự án</Tab>
        <Tab href="#contact">Liên hệ</Tab>
      </div>
    </>
  );
}

function Tab({ children, href }) {
  return (
    <a href={href} className="bg-[#fff] max-sm:py-2 font-semibold max-sm:text-center max-sm:w-full max-sm:hover:brightness-90 sm:hover:underline max-sm:active:brightness-75 sm:active:underline">
      {children}
    </a>
  );
}
