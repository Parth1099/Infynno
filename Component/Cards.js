import Image from "next/image";
import React from "react";

const Card = () => {
  return (
    <>
      <section className="  ">
        <div className="card-main max-w-[880px] flex gap-[24px]  bg-white rounded-[10px] pr-[24px]  shadow-[0px_0px_2px_rgba(40,41,61,0.04),0px_4px_8px_rgba(96,97,112,0.16);]">
          <div className="leftside  h-[254px] w-[360px]">
            <Image src="/Images/car1.png" height={342} width={360} />
          </div>
          <div className="rigthside flex flex-col gap-[96px]">
            <div className="rigth-top flex flex-col gap-[4px] pt-6 ">
              <div className="right-top-titleone font-[700] text-xl leading-8  w-[280px]">
                2022 Ford F-250 Super Duty
              </div>
              <div className="right-top-titletwo font-[400] text-xs text-[#8F90A6] leading-4 w-[280px]">
                Covert Buick GMC • 3,518 Mileage • Black
              </div>
              <div className="right-top-titlethree font-[400] text-xs text-[#8F90A6] leading-4 w-[280px]">
                Austin, Texas
              </div>
            </div>
            <div className="right bottom flex gap-[302px]">
              <div className="price-main flex items-center gap-[8px]">
                <p className="font-[600] text-[28px] leading-[38px]">$87,698</p>
                <div className="rounded-full bg-[#8F90A6] w-4 h-4 flex items-center justify-center text-[14px]  italic text-white">
                  i
                </div>
              </div>
              <div className="invite w-[137px] flex items-center justify-center py-[6px] px-4 gap-[2px] rounded-[10px] shadow-[0px_8px_16px_-6px_rgba(254,110,6,0.46)] btn-shadow">
                <button className=" text-white text-[14px] font-[500] leading-6">
                  Invite dealer
                </button>
                <div className="flex items-center justify-center mt-1">
                  <Image src="/Images/arrow.png" width={18} height={18} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
