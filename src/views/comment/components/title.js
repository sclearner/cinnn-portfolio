import React from "react";
import { CommentController } from "./controller/controller";

export function CommentTitle() {
  return (
    <div className="flex flex-col items-center gap-2 min-h-[80vh]">
      <p className="text-primary font-semibold">THÀNH TỰU</p>
      <h2 className="font-bold text-center">Những <span className="text-primary">thành tích</span> tôi đã đạt được</h2>
      <p className="pb-4">Những cố gắng và nỗ lực mà tôi đóng góp đã được công nhận</p>
      <CommentController />
    </div>
  );
}
