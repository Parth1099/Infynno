import React from "react";
import Dropdown from "./Dropdown";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/solid";

const Sidebar = () => {
  return (
    <section>
      <div className="sidebar-main">
        <div className="sidebar h-[1612px] ml-[60px] w-[312px] px-[16px] rounded-[10px] bg-white border border-solid border-[#F2F2F5]">
          <div className="filter-main flex flex-col">
            <div className="filer-title flex flex-col gap-[8px] pt-[16px] ">
              <p className="font-[700] text-[16px] leading-[24px]">Filter by</p>
              <div className="w-[30px] h-[2px] btn-shadow rounded-[10px]"></div>
            </div>

            <div className="cartype-main mt-[24px] flex flex-col gap-[14px]">
              <div className="cartypeone uppercase font-[600] text-[12px] text-[#8F90A6]">
                Car type
              </div>
              <div className="cartypebottom flex gap-[26px]">
                <label class="inline-flex items-center gap-[10px]">
                  <input
                    type="checkbox"
                    class="w-5 h-5 rounded accent-[#28293D]"
                  />
                  <span className="text-[14px] leading-[20px] font-[500]">
                    New
                  </span>
                </label>

                <label class="inline-flex items-center gap-[10px]">
                  <input
                    type="checkbox"
                    class="w-5 h-5 rounded accent-[#28293D]	"
                  />
                  <span className="text-[14px] leading-[20px] font-[500]">
                    Used
                  </span>
                </label>
              </div>
            </div>

            <div className="w-[280px] h-[1px] bg-[#E4E4EB] rounded-[10px] my-[16px]"></div>

            {/* Your zip */}
            <div className="zip-main flex flex-col gap-[8px]">
              <div className="zip-title uppercase font-[600] text-[12px] leading-4 text-[#8F90A6]">
                Your ZIP
              </div>
              <input
                type="text"
                className="block w-[280px] h-[48px] text-sm font-[500] px-4 text-gray-900 bg-white rounded-lg border outline-none border-gray-300 sm:text-md dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            {/* Search within */}
            <div className="search-main mt-[20px]">
              <div className="serch-within-main flex justify-between items-center">
                <div className="search-title text-[#8F90A6] uppercase font-[600 text-[12px] leading-[16px] ">
                  Search within
                </div>
                <div className="search-miles text-[16px] leading-6 font-[600]">
                  100 miles
                </div>
              </div>
              <input
                id="default-range"
                type="range"
                value="50"
                className="mt-[19px] mb-[11px] w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
              />
              <div className="miles-range flex justify-between font-[500] text-[12px] leading-4">
                <div className="">20 miles</div>
                <div>500 miles</div>
              </div>

              <div className="w-[280px] h-[1px] bg-[#E4E4EB] rounded-[10px] my-[16px]"></div>
            </div>

            {/* Make Div Main */}
            <div className="make-dropdown">
              <p className="uppercase text-[12px] mb-[8px] font-[600] leading-4 text-[#8F90A6]">
                make
              </p>
              <Dropdown />
            </div>

            <p className="text-[#8f90a6] uppercase text-[12px] mt-[16px] mb-[14px] leading-4">
              model
            </p>
            <div className="model-main flex flex-col gap-[16px]">
              <div>
                {" "}
                <input
                  class="form-check-input accent-[#28293D] h-4 w-4 border border-[#8F90A6] rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label
                  className="form-check-label inline-block text-[14px] leading-5 font-[500]"
                  for="flexCheckDefault"
                >
                  TLX(1)
                </label>
              </div>

              <div>
                <input
                  class="form-check-input accent-[#28293D] h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label
                  class="form-check-label inline-block text-[14px] leading-5 font-[500] "
                  for="flexCheckDefault"
                >
                  TLX(1)
                </label>
              </div>

              <div>
                <input
                  class="form-check-input accent-[#28293D] h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label
                  class="form-check-label inline-block text-[14px] leading-5 font-[500] "
                  for="flexCheckDefault"
                >
                  TLX(1)
                </label>
              </div>

              <div className="showmore flex gap-[5px] items-center">
                <p className="font-[500] text-[14px] leading-5 text-[#ff8800]">
                  Show More
                </p>
                <ChevronDownIcon className="h-[18px] text-[#ff8800]" />
              </div>

              <div className="w-[280px] h-[1px] bg-[#E4E4EB] rounded-[10px] my-[16px]"></div>

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
