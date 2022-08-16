import React from "react";
import Card from "./Cards";
import Sidebar from "./Sidebar";

const Main = () => {
  return (
    <>
      <section>
        <div className="homepage-main">
        <div className="top flex flex-col pl-[60px] py-[36px] gap-[8px]">
            <div className="top-title-one text-[12px] font-[600] text-[#8F90A6] uppercase
            ">Used cars for sale</div>
            <div className="top-title-two text-[32px] font-[700] leading-[44px]">Showing 1,234 cars</div>
        </div>
        <div className="bottom flex gap-6">
            <Sidebar/>
            <Card/>
        </div>
        </div>
      </section>
    </>
  );
};

export default Main;
