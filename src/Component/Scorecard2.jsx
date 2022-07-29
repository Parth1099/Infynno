import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { base_url, api_token, all_include } from "../Config.js";
import Dropscore from "./Dropscore.jsx";
import { RotatingLines } from "react-loader-spinner";

export default function Scorecard() {
  let { id } = useParams();

  // console.log(id , "Scorecard id")

  const [score, setScore] = useState(null);
  const [localscore, setLocalscore] = useState([]);
  const [visitorscore, setVisitorscore] = useState([]);
  const [localbat, setLocalBat] = useState([]);
  const [visitorbat, setVisitorBat] = useState([]);

  const [localbow, setLocalBow] = useState([]);
  const [visitorbow, setVisitorBow] = useState([]);
  const [localextra, setLocalExtra] = useState([]);
  const [visitorextra, setVisitorExtra] = useState([]);

  async function fetchscore() {
    const url = base_url + "/" + id + api_token + "&" + all_include;
    const { data, status } = await axios.get(url);
    // console.log(datanew,": Data From ScoreCard")
    if (status === 200) {
      setScore(data.data);
    }

    // LocalTeam Score
    const [localsc] = data?.data?.runs.filter((datanew) => {
      if (data?.data?.localteam_id === datanew?.team_id) {
        return datanew;
      }
    });
    setLocalscore(localsc);
    // console.log(localsc, ":- Scorecard Local Score Run");

    const [visitorsc] = data?.data?.runs.filter((datanew) => {
      if (data?.data?.visitorteam_id === datanew?.team_id) {
        return datanew;
      }
    });
    setVisitorscore(visitorsc);
    // console.log(visitorsc, "Visitor Score ");

    // LocalBat Data
    const localbatscore = data?.data?.batting.filter((localbatdata) => {
      if (data?.data?.localteam.id === localbatdata?.team_id) {
        return localbatdata;
      }
    });
    setLocalBat(localbatscore);
    // console.log("Local Bat Score Data :", localbatscore);

    //VisitorBat Data
    const visitorbatsc = data?.data?.batting.filter((visitorsc) => {
      if (data?.data?.visitorteam.id === visitorsc?.team_id) {
        return visitorsc;
      }
    });
    setVisitorBat(visitorbatsc);
    // console.log(score,"score")

    // LocalTeam Bowler Filter
    const localbowler = data?.data?.bowling.filter((localbw) => {
      if (data?.data?.visitorteam.id === localbw?.team_id) {
        return localbw;
      }
    });
    setLocalBow(localbowler);

    // VisitorTeam Bowler Filter
    const visitorbowler = data?.data?.bowling.filter((visitorbw) => {
      if (data?.data?.localteam.id === visitorbw?.team_id) {
        return visitorbw;
      }
    });
    setVisitorBow(visitorbowler);

    //LocalTeam Extra :
    const tlocalextra = data?.data?.scoreboards?.filter((ex) => {
      if (data?.data?.localteam.id === ex?.team_id) {
        return ex;
      }
    });
    setLocalExtra(tlocalextra[0]);

    //Visitor Team Extra
    const tvisitorextra = data?.data?.scoreboards?.filter((ex) => {
      if (data?.data?.visitorteam.id === ex?.team_id) {
        return ex;
      }
    });
    setVisitorExtra(tvisitorextra[0]);
  }
  console.log("Local Team Extra Data : ", localextra);
  console.log("Visitor Team Extra Data : ", visitorextra);

  useEffect(() => {
    fetchscore();
  }, []);

  return (
    <>
      {score ? (
        <>
          <section className="flex justify-center">
            <div className="flex-col justify-center">
              <div className="w-[700px] mt-[30px] flex flex-col gap-4">
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
                        {score?.visitorteam.code}
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

                <section className="flex justify-between  border-t-[1px] border-b-[1px] border-solid border-[#e6e6e6] py-[14px] ">
                  <div className="text-[14px] text-[#787878] px-[35px] ">
                    <p>Fantasy</p>
                  </div>
                  <div className="text-[14px] text-[#787878] px-[35px] ">
                    <p>Info</p>
                  </div>
                  <div className="text-[14px] text-[#787878] px-[35px] ">
                    <p>Live</p>
                  </div>
                  <div className="text-[14px] text-[#000] px-[33px] font-[600] ">
                    <p>Scorecard</p>
                  </div>
                  <div className="text-[14px] text-[#787878] px-[35px] ">
                    <p>Squad</p>
                  </div>
                  {/* <div className="text-[14px] text-[#787878] px-[35px] ">
                <p>Highlights</p>
              </div> */}
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
            strokeColor="grey"
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