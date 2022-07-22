import React, { useState } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";

export default function Dropscore() {
  const [dropDown, setDropDown] = useState(false);

  return (
    <div>
      <section className="flex justify-between w-[700px] px-[18px] py-[15px] bg-[#fafafa] border-b-[1px] border-solid border-[#e6e6e6]">
        <div className="flex items-center text-[16px] text-[#141414] font-[600] leading-[1.25] tracking-[0.5px] ">
          {/* <p>{score?.visitorteam.code}</p> */}
          <p>ENG</p>
        </div>
        <div className="flex items-center gap-[25px] text-[14px] text-[#141414] font-[600] tracking-[0.25px] ">
          {/* <p> {visitorscore?.score}/{visitorscore?.wickets}</p> */}
          <p>250/2</p>
          <div>
            <div onClick={() => setDropDown(!dropDown)}>
              <IoIosArrowDropdownCircle color="#ffb999" size={24} />
            </div>
            {/* <div onClick={() => setDropDown(!dropDown)}><IoIosArrowDropdownCircle color="#ffb999" size={24} /></div> */}
          </div>
        </div>
      </section>

      <section
        className={`${dropDown ? "h-[100%] visible" : "h-[0%] invisible"}`}
      >
        <div className="flex justify-between mt-4 bg-[#fafafa]   rounded-[10px] py-1">
          <div className="text-[12px] w-[400px] uppercase  leading-[1.57] tracking-[1px] ">
            <p>Batsmen</p>
          </div>
          <div className="flex gap-[50px] uppercase w-[300px] text-[12px]">
            <div>r</div>
            <div>b</div>
            <div>4s</div>
            <div>6s</div>
            <div>s/r</div>
          </div>
        </div>

        {/* <table className="w-[700px]">
          <tr className="">
            <div className="flex items-center h-[50px]">
              <div className="w-[400px]">
                <div className="text-[12px] text-[red] uppercase  leading-[1.57] tracking-[1px] ">
                  <p>Batsmen</p>
                </div>
              </div>
              <div className="flex gap-[48px] w-[300px]">
                <td className="">200</td>
                <td>2</td>
                <td>2</td>
                <td>2</td>
                <td>2</td>
              </div>
            </div>
          </tr>
        </table> */}
      </section>
    </div>
  );
}
