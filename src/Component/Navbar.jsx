import React from "react";
import { BiBell } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <section className="h-[60px] bg-nav-rgba flex justify-center text-white ">
      <div className="main flex items-center justify-around gap-[226px]">
        <div className="flex items-center gap-[50px]">
         <Link to="/"> <div className="w-[154px]">
            <img src="https://www.fancode.com/867f5c067d544a3f79567a893209f1c4.svg"></img>
          </div>
          </Link>
          <div>
            <ul className="flex gap-[24px] font-[700] text-[14px] tracking-[1.4px]">
            <Link to="/"><li className="text-active-rgba">HOME</li></Link>
            {/* <li className="text-active-rgba">HOME</li> */}
              <li>SCHEDULE</li>
              <li>
                SHOP
                <sup className="bg-active-rgba text-white p-[1px] rounded-[10%]">
                  NEW
                </sup>
              </li>
              {/* <li>New</li> */}
            </ul>
          </div>
        </div>
        {/* RIGHT SIDE */}
        <div className="flex items-center gap-[16px]">
          <div className="apple-side flex items-center gap-[12px]">
            <div className="w-[24px]">
              <img src="https://fancode.com/skillup-uploads/fc-web/icon-play-store.png"></img>
            </div>
            <div className="w-[24px]">
              <img src="https://fancode.com/skillup-uploads/fc-web/icon-app-store.png"></img>
            </div>
            <p>Get the Apple</p>
          </div>
          <div className="flex items-center gap-[8px]">
            <div>
              <BiBell color="white" size={24} />
            </div>
            <div>
              <img
                src="https://www.fancode.com/4e3d7cbf4a8cd768e30b93b7540340a2.png"
                className="w-[24px]"
              ></img>
            </div>
            <div>Login / Register</div>
          </div>
        </div>
      </div>
    </section>
  );
}
