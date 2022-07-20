import React, { useEffect, useState } from "react";
import Card from "./Card";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import Slider from "react-slick";
import { base_url, api_token, all_include } from "../Config.js";
import axios from "axios";

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
        color: "white",
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

export default function Slidernew() {
  const [matchdata, setMatchData] = useState();

  async function fetchMatchData() {
    const url = `${base_url}${api_token}&include=localteam,visitorteam,season,runs,league`;
    const {status,data} = await axios.get(url);
    // const data = res.data;
    // console.log(data.data.splice(10,20));
    if(status === 200)
    {
      setMatchData(data.data.splice(45,55));

    }
  }

  useEffect(() => {
    fetchMatchData();
  }, []);

  return (
    <>
      <section className="h-[166px] bg-nav-rgba flex justify-center">
        <div className="w-[1100px] ml-[55px] flex flex-col gap-[16px] px-[16px] pt-[20px] ">
          <p className="text-white text-[20px] font-[600]">Featured Matches</p>
          <div className="">
            <Slider {...settings}>
              {matchdata?.map((matchdata) =>{
                return(
                  <>
              <Card datamatches ={matchdata} />

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