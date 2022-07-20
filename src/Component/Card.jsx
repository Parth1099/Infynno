import React from "react";

export default function Card() {
  return (
    <>
      <section className="relative w-[340px] h-[200px] group">
        <div className="w-[340px] relative">
          <img
            className=" absolute  w-[340px] h-[100px] border-solid rounded-t-2xl"
            src="https://images.fancode.com/eyJrZXkiOiJza2lsbHVwLXVwbG9hZHMvcHJvZC1pbWFnZXMvMjAyMi8wNy9JbmRpYS10b3VyLW9mLUVuZ2xhbmRfT0RJXzAyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJjb3ZlciIsImhlaWdodCI6NzUsIndpZHRoIjoyNDYsInBvc2l0aW9uIjoidG9wIn19fQ=="
            alt="img"
          ></img>
          <div className="absolute bg-gradient-to-t from-[#000000e6] to-[#00000000] border-solid rounded-t-2xl  w-[340px] h-[100px]"></div>

          <label className="uppercase left-0 mx-[50px] text-[10px]  text-white tracking-[1.4px] absolute top-[60px]  ">
            3rd ODI India tour of England, 2022
          </label>
        </div>
        <div className="middle-btn absolute z-[10] top-[80px] left-[120px]">
          <button
            className="uppercase m-auto bg-slate-50 absolute  left-[] h-[32px] border-solid rounded-[28px] w-fit text-[14px] tracking-[1.4px] font-[600] pl-[12px] pr-[12px] text-[#FF5000]
              "
          >
            preview
          </button>
        </div>
        {/* bottom */}
        <div className="bottom-main absolute top-[100px] w-[340px] h-[100px] border-solid border-grey border rounded-b-2xl  ">
          <div className="flex flex-col">
            <div className="w-[340px] flex justify-between">
              {/* 1 */}
              <div className="flex gap-3">
                <div className="flex flex-col gap-2 justify-center items-center p-3">
                  <img
                    className="h-[32px] w-[32px]"
                    src="https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/FC-ENG@2x.png"
                    alt="img"
                  ></img>
                  <span className="text-[10px] tracking-[1.4px]">ENG</span>
                </div>

                <div className="pt-4">
                  <h2 className="font-[600] text-[14px]">259/10</h2>
                  <p className="text-[12px] text-[grey]">45.5 Overs</p>
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
                <div className="pt-4">
                  <h2 className="font-[600] text-[14px]">261/5</h2>
                  <p className="text-[12px] text-[grey]">42.1 Overs</p>
                </div>
                <div className="flex flex-col gap-2 justify-center items-center p-3">
                  <img
                    className="h-[32px] w-[32px]"
                    src="https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/FC-IND@2x.png"
                  ></img>
                  <span className="text-[10px] tracking-[1.4px]">IND</span>
                </div>
              </div>
            </div>
            <div className="text-center left-0 right-0">
              <p className="text-[12px] tracking-[0.24px]">
                India Won by 5 Wickets
              </p>
            </div>
          </div>
        </div>

        <div className=" bg-[#DCDCDC] text-center invisible border-grey border rounded-b-2xl group-hover:visible">
          asdasd
        </div>
      </section>
      {/* hover */}
    </>
  );
}
