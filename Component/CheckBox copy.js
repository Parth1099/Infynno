import React from "react";

const CheckBox = ({chk_val}) => {

    console.log(chk_val[0]," : VALUE")
    return (
        <div>

            <label class="inline-flex items-center gap-[10px]">
                <input
                    type="checkbox"
                    value={"New Car"}
                    // onChange={getNewCars}
                    // checked={carType.includes("New Car")}
                    class="w-5 h-5 rounded accent-[#28293D] border-[2px] border-[#8F90A6]"
                />
                <span className="text-[14px] leading-[20px] font-[500]">
                    {chk_val[0]}({chk_val[1]})
                </span>
            </label>
        </div>
    );
}

export default CheckBox;
