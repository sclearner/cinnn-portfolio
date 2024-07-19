import React from "react";

export function CompanyList() {
  const companies = [
    {
      from: 2022,
      name: "GAR - Give and Receive",
      position: "Trưởng ban Truyền thông",
    },
    {
      from: "1/2024",
      name: "Soft Skills Development Trainee",
      position: "Phó ban Đối ngoại",
    },
    {
      from: 2023,
      name: "Khoa Kinh tế số",
      position: "Cộng tác truyền thông",
    },
    {
      from: "2/2023",
      to: "10/2023",
      name: "The CNY GenZ",
      position: "Thành viên ban Truyền thông",
    },
    {
      from: "2/2023",
      to: "5/2023",
      name: "GSC",
      position: "Thành viên ban Đồ họa",
    },
  ];

  return (
    <div className="flex gap-6 flex-wrap justify-evenly">
      {companies.map((e) => (
        <div
          key={e.name}
          className="flex flex-col items-center justify-center bg-[#fff] p-[30px] rounded-[15px]"
        >
          <h2 className="text-center font-bold">{`${e.from}-${
            e.to || "nay"
          }`}</h2>
          <p>
            <b>{e.name}</b>
          </p>
          <caption className="text-sm">{e.position}</caption>
        </div>
      ))}
    </div>
  );
}
