import React from "react";
import { SkillsList } from "../skills";
import { MaterialButton } from "~/views/components/button";
import { AcademicInfo } from "../academic";
import { CertificateList } from "../certificates";

export function AboutController() {
  const featureList = [
    {
      name: "Kỹ năng chính",
      content: <SkillsList />,
    },
    {
      name: "Học vấn",
      content: <AcademicInfo />,
    },
    {
      name: "Chứng nhận",
      content: <CertificateList />,
    },
  ];

  const [feature, setFeature] = React.useState(0);

  return (
    <>
      <div className="flex max-lg:flex-col lg:justify-between max-lg:items-stretch gap-4 lg:gap-6 pt-8 pb-4">
        {featureList.map((e, i) => (
          <MaterialButton
            className="grow transition-colors max-lg:w-full"
            key={i}
            isTonal={feature !== i}
            onClick={() => setFeature(i)}
          >
            {e.name}
          </MaterialButton>
        ))}
      </div>
      {featureList[feature].content}
    </>
  );
}
