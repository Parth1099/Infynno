
import React from "react";


const CardLoader = () => {
    return (
        <>
            <section className="cursor-pointer animate-pulse  " >
                <div className="card-main max-w-full h-[254px] flex gap-[24px]  bg-white rounded-[10px] pr-[24px]  shadow-[0px_0px_2px_rgba(40,41,61,0.04),0px_4px_8px_rgba(96,97,112,0.16);]">
                    <div className="leftside rounded-[10px]">
                        <div className="h-[254px] w-[300px] rounded-[10px] bg-slate-300"></div>
                    </div>

                    <div className="rigthside flex flex-col justify-between py-[25px]">
                        <div className="rigth-top flex flex-col  rounded-[10px] gap-[4px] pt-6 bg-slate-300">
                            <div className="right-top-titleone font-[700] text-xl leading-8  w-[280px]">
                            </div>
                            <div className="right-top-titletwo font-[400] text-xs text-[#8F90A6] leading-4 w-[280px]">
                            </div>
                            <div className="right-top-titlethree font-[400] text-xs text-[#8F90A6] leading-4 w-[280px]">
                            </div>
                        </div>
                        <div className="right bottom flex  gap-[302px] ">
                            <div className="price-main flex items-center rounded-[10px]  bg-slate-300 gap-[8px]">
                                <div className="w-[100px] ">
                                    <p className="font-[600] text-[28px] leading-[38px]"></p>

                                </div>

                            </div>
                            <div className="invite w-[137px] h-[30px] flex items-center justify-center py-[6px] px-4 gap-[2px] rounded-[10px] shadow-[0px_8px_16px_-6px_rgba(254,110,6,0.46)] btn-shadow">

                                <div className="flex items-center justify-center mt-1">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CardLoader;
