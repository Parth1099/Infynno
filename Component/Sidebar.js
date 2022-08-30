import React, { useState } from "react";
import Dropdown from "./Dropdown";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/solid";
import Slider from "rc-slider";
import range from "rc-slider";
import "rc-slider/assets/index.css";

import DropdownComp from "./DropdownComp";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars, getCarType, getRange, getMakedata, getmodelCar, getPriceCar, getYearCar ,getFeature } from "../store/homePageslice";

const Sidebar = () => {
  const [dropshow, SetDropShow] = useState(false);
  const { carType, range, modelCar } = useSelector((state) => state.homeSlice)
  const dispatch = useDispatch();

  const { make, bodystyle, model, fuel, transmission, interiorcolor, exteriorcolor, drive, price, year,feature } = useSelector((state) => state.homeSlice)

  function getNewCars(e) {
    let arr = !e.target.checked ? carType.filter((x) => x !== e.target.value) : [...carType, e.target.value]
    let getmodel = !e.target.checked ? modelCar.filter((x) => x !== e.target.value) : [...modelCar, e.target.value]
    // let getmodel = e.target.value;
    console.log(getmodel, ",valuemodel");
    dispatch(getCarType(arr))
    dispatch(getmodelCar(getmodel));
    dispatch(fetchCars());
  }
  // console.log(feature,"Feature Redux");
  console.log(Object.entries(feature),"Feature Redux");
  // console.log(interiorcolor,"Feature Redux");

  return (
    <section>
      <div className="sidebar-main">
        <div className="sidebar h-auto ml-[60px] w-[312px] px-[16px] rounded-[10px] bg-white border border-solid border-[#F2F2F5]">
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
                    value={"New Car"}
                    onChange={getNewCars}
                    checked={carType.includes("New Car")}
                    class="w-5 h-5 rounded accent-[#28293D] border-[2px] border-[#8F90A6]"
                  />
                  <span className="text-[14px] leading-[20px] font-[500]">
                    New
                  </span>
                </label>

                <label class="inline-flex items-center gap-[10px]">
                  <input
                    type="checkbox"
                    value={"Used Car"}
                    onChange={getNewCars}
                    checked={carType.includes("Used Car")}
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
                <div className="search-title text-[#8F90A6] uppercase font-[600] text-[12px] leading-[16px] ">
                  Search within
                </div>
                <div className="search-miles text-[16px] leading-6 font-[600]">
                  {range} miles
                </div>
              </div>

              {/* <Slider defaultValue={100} ></Slider> */}
              <Slider
                defaultValue={200}
                onAfterChange={() => dispatch(fetchCars())}
                onChange={(value) => { dispatch(getRange(value)) }}
                // trackStyle={{ background: 'linear-gradient(147.14deg, #FF8800 6.95%, #E63535 93.05%)', height: "6px" }}

                min={20} max={500} />

              <div className="miles-range flex justify-between mt-[10px] font-[500] text-[12px] leading-4">
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
              <Dropdown make={make} />
            </div>

            <p className="text-[#8f90a6] uppercase text-[12px] mt-[16px] mb-[14px] leading-4">
              model
            </p>
            <div
              className={`${dropshow ? "h-auto" : "h-[150px]"
                }  overflow-hidden model-main flex flex-col gap-[16px] text-[#28293D]`}
            >


              {Object.entries(model).map(([key, value]) => {
                return (
                  <>
                    {/* <div>{key} : {value.toString()}</div> */}
                    <div>
                      <input
                        class="form-check-input accent-[#28293D] h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="checkbox"
                        checked={modelCar.includes(key)}
                        value={key}
                        onChange={getNewCars}

                        id="flexCheckDefault"
                      />
                      <label
                        class="form-check-label inline-block text-[14px] leading-5 font-[500] "
                        for="flexCheckDefault"
                      >
                        {key} ({value})
                      </label>
                    </div>

                  </>
                )
              })}


            </div>

            <div
              className={`${dropshow ? "block" : "block"
                }showmore flex gap-[5px] items-center`}
              onClick={() => SetDropShow(!dropshow)}
            >
              <p className="font-[600] text-[14px] leading-5 text-[#ff8800]">
                Show More
              </p>
              <ChevronDownIcon className="h-[18px] text-[#ff8800]" />
            </div>

            <div className="w-[280px] h-[1px] bg-[#E4E4EB] rounded-[10px] my-[16px]"></div>
          

            {/* Price Main */}
            <div className="price-main">
              <div className="price-one flex justify-between">
                <p className="text-[#8F90A6] text-[12px] font-[600] leading-[16px] uppercase">
                  price
                </p>
                <p className="text-[#28293D] text-[16px] font-[600] leading-[24px] ">
                  ${price[0]} - ${price[1]}
                </p>
              </div>
              <div className="price-two my-[15px]">
                {/* <Slider range></Slider> */}
                <Slider
                  range
                  min={0} max={100000}
                  defaultValue={[10000, 30000]}
                  onChange={(value) => dispatch(getPriceCar(value))}
                  onAfterChange={() => dispatch(fetchCars())}

                />
              </div>
              <div className="price-three flex justify-between text-[#28293D] text-[12px] font-[500] leading-[16px] uppercase">
                <p className="">$0</p>
                <p>$100,000</p>
              </div>
            </div>
            <div className="w-[280px] h-[1px] bg-[#E4E4EB] rounded-[10px] my-[16px]"></div>

            {/* Make Year */}
            <div className="price-main">
              <div className="price-one flex justify-between">
                <p className="text-[#8F90A6] text-[12px] font-[600] leading-[16px] uppercase">
                  Make Year
                </p>
                <p className="text-[#28293D] text-[16px] font-[600] leading-[24px] ">
                  {year[0]} - {year[1]}
                  {/* 2000 - 2004 */}
                </p>
              </div>
              <div className="price-two my-[15px]">
                <Slider
                  range
                  min={1990} max={2022}
                  defaultValue={[2011, 2022]}
                  onChange={(value) => dispatch(getYearCar(value))}
                  onAfterChange={() => dispatch(fetchCars())}

                />
              </div>
              <div className="price-three flex justify-between text-[#28293D] text-[12px] font-[500] leading-[16px] uppercase">
                <p className="">1990</p>
                <p>$2021</p>
              </div>
            </div>
            <div className="w-[280px] h-[1px] bg-[#E4E4EB] rounded-[10px] my-[16px]"></div>

            {/* Mileage */}
            <div className="price-main mb-[20px]">
              <div className="price-one flex justify-between">
                <p className="text-[#8F90A6] text-[12px] font-[600] leading-[16px] uppercase">
                  Mileage
                </p>
                <p className="text-[#28293D] text-[16px] font-[600] leading-[24px] ">
                  Any
                </p>
              </div>
              <div className="price-two my-[15px]">
                <Slider range></Slider>
              </div>
              <div className="price-three flex justify-between text-[#28293D] text-[12px] font-[500] leading-[16px] ">
                <p className="">0</p>
                <p>Any</p>
              </div>
            </div>

            <DropdownComp name={"Style"} data={bodystyle} data2={exteriorcolor} data3={interiorcolor} intitle1={"Body Type"} intitle2={"EXTERIOR COLOR"} intitle3={"INTERIOR COLOR"} />
            <DropdownComp name={"Performance"} data={transmission} data2={drive} data3={fuel} intitle1={"TRANSMISSION"} intitle2={"DRIVE TRAIN"} intitle3={"FUEL TYPE"} />
            <DropdownComp name={"Features"} data={Object.entries(feature)[0][1]} data2={Object.entries(feature)[1][1]} data3={Object.entries(feature)[2][1]} data4={Object.entries(feature)[3][1]} data5={Object.entries(feature)[4][1]} intitle1={"INTERIOR FEATURES"} intitle2={"TECHNOLOGY FEATURES"} intitle3={"SAFETY FEATURES"} intitle4={"EXTERIOR FEATURES"} intitle5={"OTHERS"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
