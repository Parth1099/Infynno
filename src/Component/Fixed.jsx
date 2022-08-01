import React, { useEffect, useState } from "react";
import Card from "./Card";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 4,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  appendDots: (dots) => (
    <div style={{}}>
      <ul
        style={{
          position: "relative",
          float: "right",
          top: "-315px",
          right: "20px",
        }}
      >
        {dots}
      </ul>
    </div>
  ),
  customPaging: (dots) => (
    <div
      style={{
        fontSize: "60px",
        color: "black",
      }}
    ></div>
  ),
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "white",
        height: "48px",
        top: "95px",

        width: "48px",
        overflow: "hidden",
        borderRadius: "50%",
        zIndex: "2",
      }}
      onClick={onClick}
    >
      <HiArrowRight
        fill="red"
        size={24}
        className="relative top-[-8px] left-[12px]"
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "white",
        top: "95px",
        height: "48px",
        width: "48px",
        overflow: "hidden",
        borderRadius: "50%",
        zIndex: "2",
      }}
      onClick={onClick}
    >
      <HiArrowLeft
        fill="red"
        size={24}
        className="relative top-[-8px] left-[12px]"
      />
    </div>
  );
}

export default function Fixed(props) {
  return (
    <>
      <section className="h-[166px] flex justify-center mb-[150px]">
        <div className="w-[1100px] ml-[55px] flex flex-col gap-[16px] px-[16px] pt-[20px] ">
          <p className=" text-[20px] font-[600]">{props.title}</p>
          <div className="">
            <Slider {...settings}>
              {props.data?.map((matchdata) => {
                return (
                  <>
                    <Card datamatches={matchdata} />
                  </>
                );
              })}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}
