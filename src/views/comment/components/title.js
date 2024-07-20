import React from "react";
import { CommentController } from "./controller/controller";

export function CommentTitle() {
  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-primary font-semibold">NHẬN XÉT</p>
      <h2 className="font-bold text-center">❤️TỪ MỌI NGƯỜI</h2>
      <CommentController />
    </div>
  );
}
