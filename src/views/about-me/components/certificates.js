import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export function CertificateList() {
  const certs = [
    "TOEIC 2 kỹ năng 475",
    "VSTEP level B2",
    "Chứng chỉ Microsoft Office Certification (MOS 2016)\nGiải khuyến khích MOS Championship cấp đại học",
    "Đại diện đại học tham gia MOS Championship cấp Quốc gia",
  ];

  return (
    <ul>
      {certs.map((e) => (
        <li className="flex gap-1" key={e}>
          <FontAwesomeIcon className="flex jusitfy-self-center" icon={faCertificate} color="var(--color-primary)"/>
          <p>{e}</p>
        </li>
      ))}
    </ul>
  );
}
