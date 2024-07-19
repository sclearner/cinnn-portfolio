import clsx from "clsx";
import React from "react";
import { MaterialButton } from "~/views/components/button";

const certsImport = import.meta
  .webpackContext("/public/certs", { recursive: true })

export function AchievementController() {
  const [index, setIndex] = React.useState(0);
  const [certs, setCerts] = React.useState([]);
  
  function previous() {
    setIndex(index - 1);
  }

  function next() {
    setIndex(index + 1);
  }

  React.useLayoutEffect(() => {
    setCerts(certsImport.keys()
    .map((e, i) => certsImport(e).default ));
  }, [])

  React.useLayoutEffect(() => {
    if (index < 0) setIndex(index + certs.length);
    else if (index >= certs.length) setIndex(index - certs.length);
  }, [index]);

  return (<>
    <div className="flex justify-center gap-6 items-center">
      <MaterialButton className="flex justify-center items-center aspect-square min-w-[50px] grow" padding="p-auto" onClick={previous}><img className="w-5" src="\icons\left.svg"/></MaterialButton>
      <div className="grow max-w-[600px] transition-all duration-1000">{certs && <img key={index} src={certs[index]}/>}</div>
      <MaterialButton className="flex justify-center items-center aspect-square min-w-[50px] grow" padding="p-auto" onClick={next}><img className="w-5" src="\icons\right.svg"/></MaterialButton>
    </div>
    <div className="flex gap-1">
        {certs && certs.map((_e, i) => <div className={clsx('rounded-full w-2 h-2', i === index ? 'bg-primary' : 'border-primary border-2')}/>)} 
    </div>
    </>
  );
}
