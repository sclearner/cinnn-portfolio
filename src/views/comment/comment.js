import React from "react";
import { CommentTitle } from "./components/title";
import { CommentController } from "./components/controller/controller";

export function CommentSection() {
  return (
    <div id="achievement">
      <section className="flex flex-col max-lg:gap-4 px-[10px] py-[25px] lg:px-[100px] lg:py-[50px] lg:m-[50px] justify-center gap-[45px] min-h-[80vh]">
           <CommentTitle />
           <CommentController />    
      </section>
    </div>
  );
}
