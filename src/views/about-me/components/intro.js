import React from "react";
import { AboutController } from "./controller/controller";

export function AboutSubsection() {
  return (
    <div className="max-lg:flex max-lg:flex-col max-lg:items-stretch max-lg:text-center">
      <p className="text-primary font-semibold">VỀ TÔI</p>
      <h2 className="text-primary font-bold">Niềm đam mê</h2>
      <h2 className="font-bold pb-4">với các lĩnh vực media</h2>
      <p className="text-justify">
        Chào bạn, tôi là <b>Lưu Thị Ngọc Quỳnh</b>. Bản thân tôi nhận ra mình có đam mê
        mãnh liệt về các lĩnh vực media nên rất mong muốn được làm việc và hợp
        tác với các doanh nghiệp thuộc lĩnh vực này để tích lũy kinh nghiệm cho
        bản thân và đóng góp cho sự phát triển của doanh nghiệp.
      </p>
      <AboutController />
    </div>
  );
}
