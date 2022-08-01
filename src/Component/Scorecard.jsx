import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Dropscore from "./Dropscore.jsx";
import { useSelector, useDispatch } from "react-redux";

import { RotatingLines } from "react-loader-spinner";
import { fetchScoreData } from "../Slice/ScoreCardSlice.js";
import { clearnData } from "../Slice/ScoreCardSlice.js";

export default function Scorecard() {
  const dispatch = useDispatch();
  const {
    score,
    localscore,
    visitorscore,
    localbat,
    visitorbat,
    localbow,
    visitorbow,
    localextra,
    visitorextra,
  } = useSelector((state) => state.ScoreCardSlice);

  const [activeBorder, setActiveBorder] = useState("Scorecard");

  let { id } = useParams();
  console.log("Extra", localextra);

  useEffect(() => {
    dispatch(fetchScoreData(id));
    return () => 
    {
      dispatch((clearnData()));
    }
  }, []);

  return (
    <>
      {score.length !== 0 ? (
        <>
          <section className="flex justify-center">
            <div className="flex-col justify-center">
              <div className="w-[700px] mt-[30px] flex flex-col gap-4">
                <div className="score-main flex justify-between items-center">
                  <div>
                    <div className="text-[11px] flex">
                      <p className="px-[5px] py-[3px] bg-[#EB5764] rounded-[2px] text-white">
                        {score?.localteam?.code}
                      </p>
                    </div>
                    <div className="flex  gap-1">
                      <h1 className="text-[28px] font-[600] tracking-[0.14px] leading-[42px]">
                        {localscore?.score}/{localscore?.wickets}
                      </h1>
                      <p className="text-[12px] flex items-end font-[600] leadning-[1.33] text-[#787878]">
                        ({localscore?.overs})
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <div className="h-[20px] w-[2px] bg-[#e6e6e6] justify-center items-center "></div>
                    <div className="h-[30px] w-[30px] justify-center items-center flex bg-[#e6e6e6] rounded-[50%] text-white text-[15px]">
                      v
                    </div>
                    <div className="h-[20px] w-[2px] bg-[#e6e6e6] flex justify-center items-center "></div>
                  </div>
                  <div>
                    <div className="flex justify-end text-[11px]">
                      <p className="px-[5px] py-[3px] bg-[#53A784] rounded-[2px] text-white">
                        {score?.visitorteam?.code}
                      </p>
                    </div>
                    <div className="flex  gap-1">
                      <p className="text-[12px] font-[600] text-[#787878] leading-[1.33] flex items-end">
                        ({visitorscore?.overs})
                      </p>
                      <h1 className="text-[28px] leading-[42px] font-[600] tracking-[0.14px]">
                        {visitorscore?.score}/{visitorscore?.wickets}
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="text-center tracking-tighter-[0.28px] text-[14px] font-[600]">
                  {score?.note}
                </div>

                <section className="flex justify-between  border-t-[1px] border-b-[1px] border-solid border-[#e6e6e6] pt-[14px]  ">
                  <div
                    className="text-[14px] w-[210px] text-[#787878] px-[35px] text-center"
                    onClick={() => {
                      setActiveBorder("fantasy");
                    }}
                  >
                    <p
                      className={`${activeBorder == "fantasy"
                        ? "text-[black] font-[600] "
                        : ""
                        }`}
                    >
                      Fantasy
                    </p>
                    <div className={`${activeBorder == "fantasy" ? "h-[4px] border-[solid] bg-[#ff5000] border-[#ff5000] rounded-t-lg " : " "}`}></div>
                  </div>
                  <div
                    className="text-[14px] text-[#787878] px-[35px] w-[210px] text-center"
                    onClick={() => {
                      setActiveBorder("info");
                    }}
                  >
                    <p
                      className={`${activeBorder == "info" ? "text-[black] font-[600]" : ""
                        }`}
                    >
                      Info
                    </p>
                    <div className={` ${activeBorder == "info" ? "h-[4px] border-[solid] bg-[#ff5000] border-[#ff5000] rounded-t-lg " : " "}`}></div>


                  </div>
                  <div
                    className="text-[14px] text-[#787878] px-[35px] w-[210px] text-center"
                    onClick={() => {
                      setActiveBorder("live");
                    }}
                  >
                    <p
                      className={`${activeBorder == "live" ? "text-[black] font-[600]" : ""
                        }`}
                    >
                      Live
                    </p>
                    <div className={`${activeBorder == "live" ? "h-[4px] border-[solid] bg-[#ff5000] border-[#ff5000] rounded-t-lg " : " "}`}></div>

                  </div>
                  <div
                    className="text-[14px] text-[#787878] px-[33px]  w-[210px] text-center"
                    onClick={() => {
                      setActiveBorder("scorecard");
                    }}
                  >
                    <p
                      className={`${activeBorder == "scorecard"
                        ? "text-[black] font-[600]"
                        : ""
                        }`}
                    >
                      Scorecard
                    </p>
                    <div className={`${activeBorder == "scorecard" ? "h-[4px] border-[solid] bg-[#ff5000] border-[#ff5000] rounded-t-lg " : " "}`}></div>

                  </div>
                  <div
                    className="text-[14px] text-[#787878] px-[35px] w-[210px] text-center"
                    onClick={() => {
                      setActiveBorder("squad");
                    }}
                  >
                    <p
                      className={`${activeBorder == "squad" ? "text-[black] font-[600]" : ""
                        }`}
                    >
                      Squad
                    </p>
                    <div className={`${activeBorder == "squad" ? "h-[4px] border-[solid] bg-[#ff5000] border-[#ff5000] rounded-t-lg " : " "}`}></div>

                  </div>
                </section>
              </div>

              <Dropscore
                teamcode={score?.localteam.code}
                score={score}
                teamscore={localscore}
                Bat={localbat}
                Bowl={localbow}
                Extra={localextra}
              />
              <Dropscore
                teamcode={score?.visitorteam.code}
                score={score}
                teamscore={visitorscore}
                Bat={visitorbat}
                Bowl={visitorbow}
                Extra={visitorextra}
              />
            </div>
          </section>
        </>
      ) : (
        <div className="h-[300px] flex justify-center items-center">
          <RotatingLines
            strokeColor="orange"
            strokeWidth="3"
            animationDuration="1.75"
            width="46"
            visible={true}
          />
        </div>
      )}
    </>
  );
}
