import React, { useState } from "react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/solid";
import CheckBox from "./CheckBox";

const DropdownComp = ({ data, setFunction1, setFunction2, setFunction3, data2, state1, state2, state3, data3, data4, data5, name, intitle1, intitle2, intitle3, intitle4, intitle5, trasmission, drive, fuel }) => {
  const [dropDown, setDropDown] = useState(false);




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
          {
            data && Object.entries(data)?.map(([key, value]) => {
              return (
                <>
                  <div>

                    <CheckBox name={key} value1={value} data={data} state={state1} setFunction={setFunction1} />

                  </div>
                </>
              )
            })
          }
        </div>

        <div className="style-main flex flex-col gap-3">
          <p className="font-[600] uppercase text-[#8F90A6] text-[12px] mt-4 leading-5">{intitle2}</p>
          {data2 && Object.entries(data2).map(([key, value]) => {
            return (
              <>
                <div>
                  <CheckBox name={key} value1={value} data={data2} state={state2} setFunction={setFunction2} />
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
                  <CheckBox name={key} value1={value} data={data3} state={state3} setFunction={setFunction3} />
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
