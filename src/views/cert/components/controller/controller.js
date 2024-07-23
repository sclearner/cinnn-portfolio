import clsx from "clsx";
import React from "react";
import { MaterialButton } from "~/views/components/button";
import left from "@p/icons/left.svg";
import right from "@p/icons/right.svg";
const certsImport = import.meta.webpackContext("/public/certs", {
  recursive: true,
});

function getElementLeft(element) {
  return element?.getBoundingClientRect().left;
}

export function AchievementController() {
  const [index, setIndex] = React.useState(null);
  const [certs, setCerts] = React.useState([]);
  const [height, setHeight] = React.useState(null);
  const scroller = React.useRef();
  const interval = React.useRef();

  function previous() {
    setIndex((i) => (i - 1 + certs.length) % certs.length);
    resetInterval();
  }

  function next() {
    setIndex((i) => (i + 1) % certs.length);
    resetInterval();
  }

  React.useLayoutEffect(() => {
    setCerts(
      certsImport
        .keys()
        .map((e) => (
          <img key={certsImport(e).default} src={certsImport(e).default} />
        ))
    );
    setIndex(0);
  }, []);

  React.useLayoutEffect(() => {
    const nextEle = scroller.current.children[index];
    scroller.current.scrollBy({
      top: 0,
      left: getElementLeft(nextEle) - getElementLeft(scroller.current),
      behavior: "smooth",
    });
    const newHeight = nextEle?.getBoundingClientRect().height;
    if (newHeight > 0) setHeight(newHeight);
  }, [index]);

  React.useEffect(() => {
    if (certs?.length == 0) return;
    function onMouseScroll(e) {
      if (window.innerWidth < 640) return;

      e.preventDefault();

      if (e.deltaY > 0) {
        next();
      } else if (e.deltaY < 0) {
        previous();
      }
    }

    interval.current ??= setInterval(next, 5000);
    scroller.current.addEventListener("wheel", onMouseScroll, false);

    return () => {
      scroller.current.removeEventListener("wheel", onMouseScroll);
      () => (interval.current = clearInterval(interval.current));
    };
  }, [certs]);

  function resetInterval() {
    interval.current = clearInterval(interval.current);
    interval.current ??= setInterval(next, 5000);
  }

  return (
    <>
      <div className="max-sm:relative flex justify-center gap-6 items-center">
        <MaterialButton
          className="max-sm:bg-opacity-0 max-sm:h-full max-sm:z-50 max-sm:absolute max-sm:top-auto max-sm:left-1 flex justify-center items-center sm:aspect-square min-w-[50px] grow"
          padding="p-auto"
          onClick={previous}
        >
          <img className="w-5" src={left} />
        </MaterialButton>
        <div
          className={clsx(
            "relative grow max-w-[600px] transition-all duration-1000 overflow-hidden"
          )}
          style={
            height <= 0
              ? { height: "fit-content" }
              : {
                  height: `${height}px`,
                }
          }
        >
          <div
            ref={scroller}
            className="flex items-start overflow-x-scroll no-scrollbar transition-height"
          >
            {certs}
          </div>
        </div>
        <MaterialButton
          className="max-sm:bg-opacity-0 max-sm:h-full max-sm:absolute max-sm:top-auto max-sm:right-1 flex justify-center items-center sm:aspect-square min-w-[50px] grow"
          padding="p-auto"
          onClick={next}
        >
          <img className="w-5" src={right} />
        </MaterialButton>
      </div>
      <div className="flex gap-1">
        {certs &&
          certs.map((_e, i) => (
            <div
              key={i}
              className={clsx(
                "rounded-full w-2 h-2",
                i === index ? "bg-primary" : "border-primary border-2",
                "cursor-pointer"
              )}
              onClick={() => setIndex(i)}
            />
          ))}
      </div>
    </>
  );
}
