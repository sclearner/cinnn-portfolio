import React from "react";
import { CommentTitle } from "./components/title";
import { CommentController } from "./components/controller/controller";

export function CommentSection() {
  return (
    <div id="achievement">
      <section className="flex flex-col items-center px-[100px] m-[50px] justify-center gap-[45px] min-h-[80vh]">
           <CommentTitle />
           <CommentController />    
      </section>
    </div>
  );
}
