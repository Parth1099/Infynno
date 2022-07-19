import React from "react";

export default function Scorecard() {
  return (
    <>
      <section className="flex justify-center">
        <div className="w-[700px] my-[75px]  flex flex-col gap-4">
          <div className="score-main flex justify-between items-center">
            <div>
              <div className="text-[11px] flex">
                <p className="px-[5px] py-[3px] bg-[#EB5764] rounded-[2px] text-white">
                  EN-A
                </p>
              </div>
              <div className="flex  gap-1">
                <h1 className="text-[28px] font-[600] tracking-[0.14px] leading-[42px]">
                  253/10
                </h1>
                <p className="text-[12px] flex items-end font-[600] leadning-[1.33] text-[#787878]">(38.3)</p>
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
                  SA
                </p>
              </div>
              <div className="flex  gap-1">
                <p className="text-[12px] font-[600] text-[#787878] leading-[1.33] flex items-end">(38.2)</p>
                <h1 className="text-[28px] leading-[42px] font-[600] tracking-[0.14px]">
                  253/10
                </h1>
              </div>
            </div>
          </div>
          <div className="text-center tracking-tighter-[0.28px] text-[14px] font-[600]">
            South Africa Won by 107 runs
          </div>
        </div>

        {/* 2 */}
        <div>

        </div>



        
      </section>
    </>
  );
}
