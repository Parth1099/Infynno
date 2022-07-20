import React from "react";

export default function Card({ datamatches }) {
  console.log(datamatches, "card");
  return (
    <>
      <section className="relative w-[340px] h-[240px] group">
        <div className="w-[340px] relative">
          <img
            className=" absolute  w-[340px] border-solid rounded-t-2xl"
            src="https://images.fancode.com/eyJrZXkiOiJza2lsbHVwLXVwbG9hZHMvcHJvZC1pbWFnZXMvMjAyMi8wNy9JbmRpYS10b3VyLW9mLUVuZ2xhbmRfT0RJXzAyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJjb3ZlciIsImhlaWdodCI6NzUsIndpZHRoIjoyNDYsInBvc2l0aW9uIjoidG9wIn19fQ=="
            alt="img"
          ></img>
          <div className="absolute bg-gradient-to-t from-[#000000e6] to-[#00000000] border-solid rounded-t-2xl  w-[340px] h-[100px]"></div>

          <label className="uppercase left-[8px] mx-[40px] text-[10px]  text-white tracking-[1.4px] leading-[1px] absolute top-[60px] whitespace-nowrap  ">
            {datamatches.round} {datamatches.league.name} ,
            {datamatches.season.name}
          </label>
        </div>
        <div className="middle-btn flex justify-center absolute z-[100] top-[80px] left-0 right-0 m-auto ">
          <button
            className={`uppercase  ${
              datamatches.live === true
                ? "bg-[#FF5000] text-[white]"
                : "bg-slate-50 text-[#FF5000]"
            } absolute border-solid  text-[14px] tracking-[1.4px] whitespace-nowrap font-[600] leading-[1] rounded-[30px] px-[12px] py-[10px]
              `}
          >
            {datamatches.live === true ? <p>Wath Now</p> : <p>Result</p>}
          </button>
        </div>
        {/* bottom */}
        <div className="bottom-main absolute top-[100px] w-[340px] z-50 bg-white border-solid border-grey border rounded-b-2xl">
          <div className="flex flex-col">
            <div className="w-[340px] flex justify-between pt-4 pr-4 pl-4 p-2">
              {/* 1 */}
              <div className="flex gap-3">
                <div className="flex flex-col gap-2 justify-center items-center">
                  <img
                    className="h-[32px] w-[32px]"
                    src={datamatches.localteam.image_path}
                    alt="img"
                  ></img>
                  <span className="text-[10px] tracking-[1.4px]">
                    {datamatches.localteam.code}
                  </span>
                </div>

                <div className="mt-2">
                  <h2 className="font-[600] text-[14px]">
                    {datamatches.runs[0]?.score}/{" "}
                    {datamatches?.runs[0]?.wickets}
                  </h2>
                  <p className="text-[12px] text-[grey]">
                    {datamatches.runs[0]?.overs} Overs
                  </p>
                </div>
              </div>
              {/* 2 */}
              <div className="flex flex-col justify-center items-center">
                <div className="w-[2px] h-[15px] bg-[#DCDCDC]"></div>
                <div className="border-solid rounded-[50%] w-6 h-6 bg-[#DCDCDC] text-white text-[15px] text-center items-center">
                  v
                </div>
                <div className="w-[2px] h-[15px] bg-[#DCDCDC]"></div>
              </div>
              <div className="flex gap-3">
                <div className="mt-2">
                  <h2 className="font-[600] flex justify-end text-[14px] items-end">
                    261/5
                  </h2>
                  <p className="text-[12px] text-[grey]">
                    {datamatches.runs[0]?.overs} Overs
                  </p>
                </div>
                <div className="flex flex-col gap-2 justify-center items-center">
                  <img
                    className="h-[32px] w-[32px]"
                    src={datamatches.visitorteam.image_path}
                  ></img>
                  <span className="text-[10px] tracking-[1.4px]">
                    {datamatches.visitorteam.code}
                  </span>
                </div>
              </div>
            </div>
            <div className="text-center left-0 right-0">
              <p className="text-[12px] tracking-[0.24px]">
                {datamatches.note}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#f0f1f4] absolute top-[180px] text-[12px] pb-[5px] pt-[20px] w-[340px] z-[1] text-center items-center hidden border-grey border rounded-b-2xl group-hover:block">
          More Cricket
        </div>
      </section>
      {/* hover */}
      {/* <div className="bg-[#DCDCDC] h-[20px] w-[340px] hidden z-1  border-grey border rounded-b-2xl peer-hover:block">
          asdasd
        </div> */}
    </>
  );
}
