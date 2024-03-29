import Image from "next/image";
import router from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import CardLoader from "./CardLoader";

const Card = ({ data }) => {
  const { isLoading } = useSelector((state) => state.homeSlice);
  return (
    <>
      {isLoading ? (
        <CardLoader />
      ) : (
        <>
          <section
            className="cursor-pointer"
            onClick={() => router.push(`/cardetails/${data.vin}`)}
          >
            <div className="card-main max-w-full h-[254px] flex gap-[24px]  bg-white rounded-t-[10px] pr-[24px]  shadow-[0px_0px_2px_rgba(40,41,61,0.04),0px_4px_8px_rgba(96,97,112,0.16);]">
              <div className="leftside   rounded-[10px]">
                <Image
                  src={data.photos ? data.photos[0] : "/Images/cardemo.png"}
                  height={254}
                  width={300}
                  className="rounded-t-[10px]"
                />
              </div>
              <div className="rigthside flex flex-col justify-between py-[25px]">
                <div className="rigth-top flex flex-col gap-[4px] pt-6 ">
                  <div className="right-top-titleone font-[700] text-xl leading-8  w-[280px]">
                    {data.year} {data.make} {data.model}
                  </div>
                  <div className="right-top-titletwo font-[400] text-xs text-[#8F90A6] leading-4 w-[280px]">
                    {data.dealership} • {data.milage} Milage •{" "}
                    {data.exterior_color}
                  </div>
                  <div className="right-top-titlethree font-[400] text-xs text-[#8F90A6] leading-4 w-[280px]">
                    {data.city}, {data.state}
                  </div>
                </div>
                <div className="right bottom flex  gap-[302px]">
                  <div className="price-main flex items-center gap-[8px]">
                    <p className="font-[600] text-[28px] leading-[38px]">
                      ${data.price.toLocaleString("en-US")}
                    </p>
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
            <div className="special-offer h-[76px] bg-[#FFF8E6] flex flex-col justify-center px-[24px] rounded-b-[10px] shadow-[0px_0px_2px_rgba(40,41,61,0.04),0px_4px_8px_rgba(96,97,112,0.16)">
              <div className="special-offer-top items-center flex  gap-1">
                <Image src="/Images/star.png" height={15} width={15} />
                <p className="font-[600] text-[12px] text-[#05A660] uppercase leading-5">
                  Special offers
                </p>
              </div>
              <div className="special-offer-bottom flex gap-4 font-[400] text-[14px] leading-[24px] text-[#28293D]">
                <p>
                  • {data.car_offers.split(",")[0].replace(/[\[\]'"]+/g, "")}
                </p>
                <p>
                  • {data.car_offers.split(",")[1].replace(/[\[\]'"]+/g, "")}
                </p>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Card;
