import React from "react";
import { HomeButton } from "./components/home-button";
import { Tabbar } from "./components/tabbar";
import { ContactButton } from "./components/contact-button";

export function Navbar() {
  const navbar = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => e.target.classList.toggle('is-sticky', e.intersectionRatio < 1),
      {threshold: [1]}
    )
    observer.observe(navbar.current);

    return () => {
      observer.disconnect();
    }
  }, []);
  
  return (<nav ref={navbar} className="sticky w-full top-[-1px] bg-background flex py-2 sm: px-2 xl:px-20 z-50 duration-500">
    <HomeButton />
    <Tabbar />
    <ContactButton />
  </nav>);
}
