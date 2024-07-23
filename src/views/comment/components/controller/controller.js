import {
  faArrowLeft,
  faArrowRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import React from "react";
import { MaterialButton } from "~/views/components/button";

const commentList = new Array(100).fill({
  name: "Tran Van A",
  position: "Bạn Quỳnh",
  comment:
    "Lorem ipsum dolor sit amet consectetur. Tortor odio purus morbi amet. Donec bibendum et cursus felis sollicitudin vulputate cursus odio. Aliquam cursus eu in aliquam nisl",
  rating: 4,
  avatar:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXdLZ0JqZ9AY_6tpoom88gFlliGoZP8lRyLA&s",
});

function getElementLeft(element) {
  return element?.getBoundingClientRect().left;
}

export function CommentController() {
  const [index, setIndex] = React.useState(0);
  const [comments, setComments] = React.useState([]);
  const scroller = React.useRef();
  const previousIndex = React.useRef(0);

  function previous() {
    setIndex(index - 1);
  }

  function next() {
    setIndex(index + 1);
  }

  React.useLayoutEffect(() => {
    setComments(commentList);
  }, []);

  React.useLayoutEffect(() => {
    if (index < 0) setIndex(index + comments.length);
    else if (index >= comments.length) setIndex(index - comments.length);
  }, [index]);

  React.useEffect(() => {
    const previousEle = scroller.current.children[previousIndex.current];
    const nextEle = scroller.current.children[index];
    scroller.current.scrollBy({
      top: 0,
      left: getElementLeft(nextEle) - getElementLeft(previousEle),
      behavior: "smooth",
    });
    previousIndex.current = index;
  }, [index]);

  return (
    <>
      <div className="flex justify-center gap-6 items-center">
        <MaterialButton
          className="flex justify-center items-center aspect-square max-w-[50px] grow"
          padding="p-auto"
          onClick={previous}
          isTonal
        >
          <FontAwesomeIcon icon={faArrowLeft} color="var(--color-primary)" />
        </MaterialButton>
        <MaterialButton
          className="flex justify-center items-center aspect-square max-w-[50px] grow"
          padding="p-auto"
          onClick={next}
        >
          <FontAwesomeIcon icon={faArrowRight} color="white" />
        </MaterialButton>
      </div>
      <div className="w-full overflow-hidden">
        <div
          ref={scroller}
          className="flex flex-nowrap gap-6 w-full overflow-scroll no-scrollbar"
        >
          {comments.map((e, i) => (
            <Comment key={i} comment={e} />
          ))}
        </div>
      </div>
    </>
  );
}

function Comment({ comment }) {
  return (
    <div className="flex flex-col justify-center items-center min-w-[297px] p-5 gap-[30px] border-primary border-2">
      <img
        className="rounded-full h-[150px] aspect-square object-cover"
        src={comment.avatar}
      />
      <Rating star={comment.rating} />
      <p className="w-full text-sm">{comment.comment}</p>
      <div>
        <h3 className="text-center text-sm">{comment.name}</h3>
        <p className="text-center text-sm">{comment.position}</p>
      </div>
    </div>
  );
}

function Rating({ star = 0, max = 5 }) {
  if (star > max) throw new Error("Star must not be greater than max");
  return (
    <div className="flex gap-[5px] justify-center">
      {new Array(max).fill().map((_, i) => (
        <FontAwesomeIcon
          className={clsx(
            i + 1 <= star ? "text-gold" : "text-primary",
            "text-2xl"
          )}
          icon={faStar}
        ></FontAwesomeIcon>
      ))}
    </div>
  );
}
