import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { MaterialButton } from "~/views/components/button";

const certsImport = import.meta.webpackContext("/public/certs", {
  recursive: true,
});

export function CommentController() {
  const [index, setIndex] = React.useState(0);
  const [certs, setCerts] = React.useState([]);

  function previous() {
    setIndex(index - 1);
  }

  function next() {
    setIndex(index + 1);
  }

  React.useLayoutEffect(() => {
    setCerts(certsImport.keys().map((e, i) => certsImport(e).default));
  }, []);

  React.useLayoutEffect(() => {
    if (index < 0) setIndex(index + certs.length);
    else if (index >= certs.length) setIndex(index - certs.length);
  }, [index]);

  return (
    <>
      <div className="flex justify-center gap-6 items-center">
        <MaterialButton
          className="flex justify-center items-center aspect-square min-w-[50px] grow"
          padding="p-auto"
          onClick={previous}
          isTonal
        >
          <FontAwesomeIcon icon={faArrowLeft} color="var(--color-primary)"/>
        </MaterialButton>

        <MaterialButton
          className="flex justify-center items-center aspect-square min-w-[50px] grow"
          padding="p-auto"
          onClick={next}
        >
          <FontAwesomeIcon icon={faArrowRight} color="white" />
        </MaterialButton>
      </div>
    </>
  );
}
