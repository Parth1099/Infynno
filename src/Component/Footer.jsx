import React from "react";
import {

} from "react-icons/ai";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <section className=" bg-nav-rgba mt-[10%] flex flex-col justify-center text-white items-center">
        <div className="w-full pt-[32px] pb-[33px] border-b-[1px] border-[#282828] border-solid flex justify-center">
          <img
            className="w-[154px]"
            src="https://www.fancode.com/867f5c067d544a3f79567a893209f1c4.svg"
          ></img>
        </div>
        <div className="flex flex-col items-center item-center gap-[23px] border-b-[1px] border-[#282828] border-solid w-full py-[24px]">
          <div className="text-[18px] tracking-[0.15px] text-[#c8c8c8]">
            Connect With Us
          </div>
          <div className="flex items-center gap-[24px] ">
            <div className=" flex justify-center items-center rounded-full border-solid border-[1px] border-active-rgba p-[15px]">
              <BsTwitter fill="rgb(255, 80, 0)" />
            </div>
            <div className=" flex justify-center items-center rounded-full border-solid border-[1px] border-active-rgba p-[15px]">
              <BsInstagram fill="rgb(255, 80, 0)" />
            </div>
            <div className="flex justify-center items-center rounded-full border-solid border-[1px] border-active-rgba p-[15px]">
              <FaFacebookF fill="rgb(255, 80, 0)" />
            </div>
          </div>
        </div>
        <div className="flex  ">
          <div className="flex p-[8px] ml-[32px] text-center">
            Corporate Office: ONE BKC, Tower A, 12th 14th Floor, Unit 1201 1202
            and 1401 1402, Plot C-66, G Block, Bandra Kurla Complex, Bandra
            (East), Mumbai, Maharashtra-400051
          </div>
          <div className="flex p-[8px]">
            <ul className="flex flex-wrap">
              <li>Careers |</li>
              <li className="ml-[8px]"> Help Desk |</li>
              <li className="ml-[8px]">T&Cs |</li>
              <li className="ml-[8px]">Privacy Policy |</li>
              <li className="ml-[8px]">About Us |</li>
              <li className="ml-[8px]">IND vs WI |</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
