import clsx from "clsx";
import React from "react";
import { MaterialButton } from "~/views/components/button";

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
  const previousIndex = React.useRef(0);
  const scroller = React.useRef();

  function previous() {
    previousIndex.current = index;
    setIndex((index - 1 + certs.length) % certs.length);
  }

  function next() {
    previousIndex.current = index;
    setIndex((index + 1) % certs.length);
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
   
      const previousEle = scroller.current.children[previousIndex.current];
      const nextEle = scroller.current.children[index];
      scroller.current.scrollBy({
        top: 0,
        left: getElementLeft(nextEle) - getElementLeft(previousEle),
        behavior: "smooth",
      });
      previousIndex.current = index;
      const newHeight = nextEle?.getBoundingClientRect().height;
      if (newHeight > 0) setHeight(newHeight);
      console.log(newHeight);

  }, [index]);

  return (
    <>
      <div className="flex justify-center gap-6 items-center">
        <MaterialButton
          className="flex justify-center items-center aspect-square min-w-[50px] grow"
          padding="p-auto"
          onClick={previous}
        >
          <img className="w-5" src="\icons\left.svg" />
        </MaterialButton>
        <div
          className={clsx(
            "relative grow max-w-[600px] transition-all duration-1000 overflow-hidden"
          )}
          style={height <= 0 ? {height: 'fit-content'} : {
            height: `${height}px`,
          }}
        >
          <div
            ref={scroller}
            className="flex items-start overflow-x-scroll no-scrollbar transition-height"
          >
            {certs}
          </div>
        </div>
        <MaterialButton
          className="flex justify-center items-center aspect-square min-w-[50px] grow"
          padding="p-auto"
          onClick={next}
        >
          <img className="w-5" src="\icons\right.svg" />
        </MaterialButton>
      </div>
      <div className="flex gap-1">
        {certs &&
          certs.map((_e, i) => (
            <div
              key={i}
              className={clsx(
                "rounded-full w-2 h-2",
                i === index ? "bg-primary" : "border-primary border-2"
              )}
              onClick={() => setIndex(i)}
            />
          ))}
      </div>
    </>
  );
}
