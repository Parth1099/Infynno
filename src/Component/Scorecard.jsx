import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { base_url, api_token, all_include } from "../Config.js";

export default function Scorecard() {
  let { id } = useParams();

  // console.log(id , "Scorecard id")

  const [score, setScore] = useState(null);
  const [localscore, setLocalscore] = useState([]);
  // const [visitorscore,setVisitorscore] = useState([]);

  async function fetchscore() {
    const url = base_url + "/" + id + api_token + "&" + all_include;
    const { data, status } = await axios.get(url);
    // console.log(datanew,": Data From ScoreCard")
    if (status === 200) {
      setScore(data.data);
    }

    // console.log(data);
    const [localsc] = data?.data.runs.filter((data) => {
      if (data.data?.localteam_id === data.data?.team_id) {
        return data;
      }
    });
    setLocalscore(localsc);

    console.log(localsc, ":- Scorecard Local Score Run");
  }

  useEffect(() => {
    fetchscore();
  }, []);

  return (
    <>
      <section className="flex justify-center">
        <div className="w-[700px] my-[75px]  flex flex-col gap-4">
          <div className="score-main flex justify-between items-center">
            <div>
              <div className="text-[11px] flex">
                <p className="px-[5px] py-[3px] bg-[#EB5764] rounded-[2px] text-white">
                  {score?.localteam.code}
                </p>
              </div>
              <div className="flex  gap-1">
                <h1 className="text-[28px] font-[600] tracking-[0.14px] leading-[42px]">
                  {localscore?.score}/{localscore?.wickets}
                  {/* {score?.runs[0].score}/{score?.runs[0].wickets} */}
                </h1>
                <p className="text-[12px] flex items-end font-[600] leadning-[1.33] text-[#787878]">
                  ({score?.runs[0].overs})
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
                  {score?.visitorteam.code}
                </p>
              </div>
              <div className="flex  gap-1">
                <p className="text-[12px] font-[600] text-[#787878] leading-[1.33] flex items-end">
                  ({score?.runs[0].overs})
                </p>
                <h1 className="text-[28px] leading-[42px] font-[600] tracking-[0.14px]">
                  253/10
                </h1>
              </div>
            </div>
          </div>
          <div className="text-center tracking-tighter-[0.28px] text-[14px] font-[600]">
            {score?.note}
          </div>
        </div>

        {/* 2 */}
        <div></div>
      </section>
    </>
  );
}
