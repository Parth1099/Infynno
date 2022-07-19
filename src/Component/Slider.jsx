import React from "react";
import Card from "./Card";
import {HiArrowRight,HiArrowLeft} from "react-icons/hi"
import Slider from "react-slick";



const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      appendDots: dots => (
        <div
          style={{
            // backgroundColor: "white",
            // borderRadius: "10px",
                    }}
        >
          <ul style={{position : "relative",float:"right",top:"-230px" }}> {dots} </ul>
        </div>
      ),
};
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "white",height:"48px",width:"48px",overflow:"hidden" ,borderRadius : "50%",zIndex:"2" }}
        onClick={onClick}
      >
      <HiArrowRight fill="red" size={24} className="relative top-[-8px] left-[12px]" />
      </div>

    );
  }
  

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "white",height:"48px",width:"48px",overflow:"hidden" ,borderRadius : "50%",zIndex:"2" }}
        onClick={onClick}
      >
      <HiArrowLeft fill="red" size={24} className="relative top-[-8px] left-[12px]"  />

      </div>
    );
  }

export default function Slidernew() {
  return (
    <>
      <section className="h-[166px] bg-nav-rgba flex justify-center">
        <div className="w-[1100px] ml-[55px] flex flex-col gap-[16px] px-[16px] pt-[20px] ">
          <p className="text-white text-[20px] font-[600]">Featured Matches</p>
          <div className="">
            <Slider {...settings}>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}
