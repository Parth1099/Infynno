import React from "react";
import { useDispatch } from "react-redux";
import { fetchCars } from "../store/homePageslice";




const CheckBox = ({ name, state, setFunction }) => {
    const dispatch = useDispatch();
    // console.log(data, "PROPSSS")
    function getStyle(e) {
        let arr = !e.target.checked ? state.filter((x) => x !== e.target.value) : [...state, e.target.value]
        dispatch(setFunction([]));
        dispatch(setFunction(arr));
        dispatch(fetchCars());
    }
    return (
        <div>
            <label class="inline-flex items-center gap-[10px]">
                <input
                    type="checkbox"
                    value={name}
                    onChange={getStyle}
                    // checked={}
                    class="w-5 h-5 rounded accent-[#28293D] border-[2px] border-[#8F90A6]"
                />
                <span className="text-[14px] leading-[20px] font-[500]">
                    {name}
                </span>
            </label>
        </div>
    );
}
export default CheckBox;
