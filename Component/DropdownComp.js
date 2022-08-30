import React, { useState } from "react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/solid";

const DropdownComp = ({ data, data2 ,data3,data4 ,data5 ,name , intitle1 , intitle2 , intitle3,intitle4,intitle5 ,trasmission ,drive , fuel }) => {
  const [dropDown, setDropDown] = useState(false);
  console.log(data4,"DATA")
  // return <p>temp</p>;

  return (
    <>
      <div
        className={`${dropDown ? "" : ""
          } drop-style-main flex justify-between items-center text-[#28293D] py-[14px] px-[16px] mx-[-16px] bg-[#F2F2F5] mb-4 w-[312px]`}
        onClick={() => {
          setDropDown(!dropDown);
        }}
      >
        <p className="font-[600] text-[16px] leading-6 text-[#28293D]">
          {name}
        </p>
        <ChevronDownIcon
          height={26}
          className={`${dropDown ? "rotate-180 duration-500" : "rotate-0 duration-500"
            }`}
        />
      </div>

      <div className={`${dropDown ? "h-auto" : " h-0 "} overflow-hidden`}>
        <div className="style-main flex flex-col gap-3">
          <p className="font-[600] uppercase text-[#8F90A6] text-[12px] leading-5">{intitle1}</p>
          {data && Object.entries(data)?.map(([key, value]) => {
            return (
              <>
                <div>
                  <input
                    class="form-check-input accent-[#28293D] h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    class="form-check-label inline-block text-[14px] text-[#28293D] leading-5 font-[500] "
                    for="flexCheckDefault"
                  >
                    {key} ({value})
                  </label>
                </div>
              </>
            )
          })}
        </div>

        <div className="style-main flex flex-col gap-3">
          <p className="font-[600] uppercase text-[#8F90A6] text-[12px] mt-4 leading-5">{intitle2}</p>
          {data2 && Object.entries(data2).map(([key, value]) => {
            return (
              <>
                <div>
                  <input
                    class="form-check-input accent-[#28293D] h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    class="form-check-label inline-block text-[14px] text-[#28293D] leading-5 font-[500] "
                    for="flexCheckDefault"
                  >
                    {key} ({value})
                  </label>
                </div>
              </>
            )
          })}
        </div>

        <div className="style-main flex flex-col gap-3">
          <p className="font-[600] uppercase text-[#8F90A6] text-[12px] mt-4 leading-5">{intitle3}</p>
          {data3 && Object.entries(data3).map(([key, value]) => {
            return (
              <>
                <div>
                  <input
                    class="form-check-input accent-[#28293D] h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    class="form-check-label inline-block text-[14px] text-[#28293D] leading-5 font-[500] "
                    for="flexCheckDefault"
                  >
                    {key} ({value})
                  </label>
                </div>
              </>
            )
          })}
        </div>

        <div className="style-main flex flex-col gap-3">
          <p className="font-[600] uppercase text-[#8F90A6] text-[12px] mt-4 leading-5">{intitle4}</p>
          {data4 && Object.entries(data4).map(([key, value]) => {
            return (
              <>
                <div>
                  <input
                    class="form-check-input accent-[#28293D] h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    class="form-check-label inline-block text-[14px] text-[#28293D] leading-5 font-[500] "
                    for="flexCheckDefault"
                  >
                    {key} ({value})
                  </label>
                </div>
              </>
            )
          })}
        </div>

        <div className="style-main flex flex-col gap-3">
          <p className="font-[600] uppercase text-[#8F90A6] text-[12px] mt-4 leading-5">{intitle5}</p>
          {data5 && Object.entries(data5).map(([key, value]) => {
            return (
              <>
                <div>
                  <input
                    class="form-check-input accent-[#28293D] h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    class="form-check-label inline-block text-[14px] text-[#28293D] leading-5 font-[500] "
                    for="flexCheckDefault"
                  >
                    {key} ({value})
                  </label>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </>
  );
};

export default DropdownComp;
