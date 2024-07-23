import React from "react";
import { faFacebookF, faLinkedinIn, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Footer() {
  return (
    <footer className="bg-primary flex flex-col md:flex-row p-[10px] lg:px-[100px] justify-between gap-4 lg:gap-[45px] items-center">
      <div className="flex max-lg:flex-col max-lg:items-center lg:gap-[30px] gap-2">
        <div className="flex gap-[6px] items-center">
          <img src="/icons/icon.svg" />
          <b>LTNQ</b>
        </div>
        <div className="text-sm max-lg:text-center">
          <p>© Copyright 2024. All Rights Reserved.</p>
          <p>Template bởi AeroVision</p>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <p className="text-[0.8888889rem]">THEO DÕI TÔI</p>
        <a className="flex justify-center items-center w-[30px] aspect-square rounded-full bg-secondary text-[#fff]">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a className="flex justify-center items-center w-[30px] aspect-square rounded-full bg-secondary text-[#fff]">
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
        <a className="flex justify-center items-center w-[30px] aspect-square rounded-full bg-secondary text-[#fff]">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a className="flex justify-center items-center w-[30px] aspect-square rounded-full bg-secondary text-[#fff]">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </footer>
  );
}
