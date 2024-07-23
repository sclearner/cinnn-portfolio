import React from "react";

export function AcademicInfo() {
  const GPA = 3.65;

  return (
    <ul>
      <li className="flex items-center">
        <div className="grow text-start">
          <h3>Cử nhân Dữ liệu lớn</h3>
          <h4>Học viện Chính sách và Phát triển</h4>
          <p>2022-nay</p>
        </div>
        <p className="text-primary font-bold text-6xl">{GPA}</p>
      </li>
    </ul>
  );
}
