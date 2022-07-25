import React, { useState } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";

export default function Dropscore({ teamcode, score, teamscore, Bat, Bowl }) {
  
  const [dropDown, setDropDown] = useState(false);

  return (
    <div>
      <section className="flex justify-between w-[700px] px-[18px] py-[15px] bg-[#fafafa] border-b-[1px] border-solid border-[#e6e6e6]">
        <div className="flex items-center text-[16px] text-[#141414] font-[600] leading-[1.25] tracking-[0.5px] ">
          {/* <p>{score?.visitorteam.code}</p> */}
          <p>{teamcode}</p>
        </div>
        <div className="flex items-center gap-[25px] text-[14px] text-[#141414] font-[600] tracking-[0.25px] ">
          {/* <p> {visitorscore?.score}/{visitorscore?.wickets}</p> */}
          <p>
            {teamscore.score}/{teamscore.wickets}
          </p>
          <div>
            <div onClick={() => setDropDown(!dropDown)}>
              <IoIosArrowDropdownCircle
                className={`${
                  dropDown ? "rotate-180 duration-500" : "duration-500"
                }`}
                color="#ffb999"
                size={28}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={`${dropDown ? "h-[100%] block" : "h-[0%] hidden"}`}>
        <div className="flex justify-between items-center p-[10px] bg-[#fafafa] rounded-[10px] mt-[20px] mx-[10px] ">
          <div className="text-[12px] uppercase leading-[1.57] tracking-[1px] text-[#787878] ">
            <p>Batsmen</p>
          </div>
          <table>
            <tbody>
              <tr className="uppercase text-[12px] text-[#787878]">
                <td className="min-w-[60px]  font-[600] ">r</td>
                <td className="min-w-[60px]  ">b</td>
                <td className="min-w-[60px]">4s</td>
                <td className="min-w-[60px]">6s</td>
                <td className="min-w-[60px] ">s/r</td>
              </tr>
            </tbody>
          </table>
        </div>

        {Bat?.map((bat, index) => {
          return (
            <div
              key={index}
              className="flex justify-between p-[10px] mx-[10px] border-b-[1px] border-solid border-[#f5f5f5]"
            >
              <div className="flex flex-col">
                <div className="text-[14px] text-[#0081ff] tracking-[0.25px]">
                  <p>{bat?.batsman?.fullname}</p>
                </div>
                <div className="text-[11px] text-[#787878] leading-[2.27] tracking-[0.3px]">
                  B Ben Stokes
                </div>
              </div>
              <table>
                <tbody>
                  <tr className="text-[14px] text-[#787878]">
                    <td className="min-w-[60px]   font-[600] ">
                      <p>{bat?.score}</p>
                    </td>
                    <td className="min-w-[60px]    ">
                      <p>{bat?.ball}</p>
                    </td>
                    <td className="min-w-[60px]  ">
                      <p>{bat?.four_x}</p>
                    </td>
                    <td className="min-w-[60px]  ">
                      <p>{bat?.six_x}</p>
                    </td>
                    <td className="min-w-[60px]    ">
                      <p>{bat?.rate}</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })}

        <section className="flex justify-between px-[18px] py-[15px]  border-b-[1px] border-solid border-[#e6e6e6]">
          <div className="flex items-center text-[14px] text-[#141414] font-[600] leading-[1.25] tracking-[0.5px]">
            <p>Extras</p>
          </div>
          <div className="flex gap-[5px] items-center">
            <span className="text-[14px] text-[#141414] font-[600] tracking-[0.25px]">
              13
            </span>
            <div className="pt-[2.5px] text-[12px] text-[#787878] leading-[1.33] font-[500] tracking-[0.4px]">
              <p>(b 4, lb 2, nb 1, w 8, p 0)</p>
            </div>
          </div>
        </section>

        <section className="flex justify-between px-[18px] py-[15px] border-b-[1px] border-solid border-[#e6e6e6]">
          <div className="text-[14px] font-[600] leading-[1.5] tracking-[0.25px]">
            <p>Yet to Bat</p>
          </div>

          <div className="text-[12px] leading-[1.27] tracking-[0.3px] text-[#787878]">
            Alzarri Joseph, Hayden Walsh, Jayden Seales
          </div>
        </section>

        <section className="flex justify-between px-[18px] py-[15px] border-b-[1px] border-solid border-[#e6e6e6]">
          <div className="text-[18px] leading-[1.25] font-[600] tracking-[0.5px]">
            <p>Total Score</p>
          </div>
          <div className="text-[14px] flex items-center gap-[5px]">
            <span className="text-[18px] font-[600] leadning-[1.25] tracking-[0.5px]">
              {teamscore?.score}/{teamscore?.wickets}
            </span>
            <p className="text-[14px] leadning-[1.5] tracking-[0.25px] text-[#787878]">
              {" "}
              ({teamscore?.overs} overs)
            </p>
          </div>
        </section>

        {/* Bowler Data */}
        <div className="flex justify-between items-center p-[10px] bg-[#fafafa] rounded-[10px] mt-[20px] mx-[10px] ">
          <div className="text-[12px] uppercase leading-[1.57] tracking-[1px] text-[#787878] ">
            <p>Bowler</p>
          </div>
          <table>
            <tbody>
              <tr className="uppercase text-[12px] text-[#787878]">
                <td className="min-w-[60px]  font-[600] ">o</td>
                <td className="min-w-[60px]  ">m</td>
                <td className="min-w-[60px]">r</td>
                <td className="min-w-[60px]">w</td>
                <td className="min-w-[60px] ">eco</td>
              </tr>
            </tbody>
          </table>
        </div>

        {Bowl?.map((bowl, index) => {
          return (
            <div
              key={index}
              className="flex justify-between p-[10px] mx-[10px] border-b-[1px] border-solid border-[#f5f5f5]"
            >
              <div className="flex flex-col">
                <div className="text-[14px] text-[#0081ff] tracking-[0.25px]">
                  <p>{bowl?.bowler?.fullname}</p>
                </div>
                {/* <div className="text-[11px] text-[#787878] leading-[2.27] tracking-[0.3px]">
                  B Ben Stokes
                </div> */}
              </div>
              <table>
                <tbody>
                  <tr className="text-[14px] text-[#787878]">
                    <td className="min-w-[60px]   font-[600] ">
                      <p>{bowl?.overs}</p>
                    </td>
                    <td className="min-w-[60px]    ">
                      <p>{bowl?.medians}</p>
                    </td>
                    <td className="min-w-[60px]  ">
                      <p>{bowl?.runs}</p>
                    </td>
                    <td className="min-w-[60px]  ">
                      <p>{bowl?.wickets}</p>
                    </td>
                    <td className="min-w-[60px]    ">
                      <p>{bowl?.rate}</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })}

        {/* Fall of Wicket Data */}
        <div className="flex justify-between items-center p-[10px] bg-[#fafafa] rounded-[10px] mt-[20px] mx-[10px] ">
          <div className="text-[12px] uppercase leading-[1.57] tracking-[1px] text-[#787878] ">
            <p>Fall of Wickets</p>
          </div>
          <table>
            <tbody>
              <tr className="uppercase text-[12px] text-[#787878]">
                <td className="min-w-[60px]  font-[600] ">score</td>
                <td className="min-w-[60px]  ">over</td>
              </tr>
            </tbody>
          </table>
        </div>
        {Bat?.map((bat, index) => {
          return (
            <div>
              {bat?.fow_balls > 0 && (
                <div
                  key={index}
                  className="flex justify-between p-[10px] mx-[10px] border-b-[1px] border-solid border-[#f5f5f5]"
                >
                  <div className="flex flex-col">
                    <div className="text-[14px] text-[#0081ff] tracking-[0.25px]">
                      <p>{bat?.batsman?.fullname}</p>
                      {/* <p>{bat?.batsman?.fullname}</p> */}
                    </div>
                  </div>
                  <table>
                    <tbody>
                      <tr className="text-[14px] text-[#787878]">
                        <td className="min-w-[60px]   font-[600] ">
                          <p>{bat?.fow_score}</p>
                        </td>
                        <td className="min-w-[60px]    ">
                          <p>{bat?.fow_balls}</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          );
        })}
      </section>
    </div>
  );
}
