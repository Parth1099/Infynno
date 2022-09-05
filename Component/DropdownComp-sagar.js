import React, { useState } from "react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/solid";
import CheckBox from "./CheckBox";

// const DropdownComp = ({ data, data2, data3, data4, data5, name, intitle1, intitle2, intitle3, intitle4, intitle5, trasmission, drive, fuel }) => {
const DropdownComp = ({ data, name }) => {
  const [dropDown, setDropDown] = useState(false);
  // const {featureData } = useSelector((state) => state.homeSlice)
// console.log(Object.entries(data), "DAATA -----");

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
      { data && Object.keys(data).map(d => (
        <div className={`${dropDown ? "h-auto" : " h-0 "} overflow-hidden`}>
          <div className="style-main flex flex-col gap-3">
            <p className="font-[600] uppercase text-[#8F90A6] text-[12px] leading-5">{d}</p>
            {
              data[d] && Object.entries(data[d])?.map((chk_val, i) => {
                {/* console.log(key,"keyy",value) */}
                {/* console.log(key,") */}
                return (
                  <>
                    <div>
                      {/* <input
                      class="form-check-input accent-[#28293D] h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    /> */}
                      <CheckBox chk_val={chk_val}  />
                      {/* <label
                      class="form-check-label inline-block text-[14px] text-[#28293D] leading-5 font-[500] "
                      for="flexCheckDefault"
                    >
                      {key} ({value})
                    </label> */}
                    </div>
                  </>
                )
              })
            }
          </div>
        </div>
      )) }
    </>
  );
};

export default DropdownComp;
