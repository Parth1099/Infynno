import axios from "axios";
import Slider from "react-slick";

import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { BsChevronDown } from "react-icons/bs";
import {FaChevronDown } from "react-icons/fa";
import "./Cards.css";

export default function Moviewatch(props) {
  console.log(props);
  const [watchmovie, setMovieData] = useState([]);

  async function fetchwatchmovie() {
    const url = `https://api.themoviedb.org/3/movie/${props.type}?api_key=2de9acb8797cc1e7f20a96cdc13bdb0a`;
    const res = await axios.get(url);
    const data = res.data;
    console.log(data);
    setMovieData(data.results);
  }
  useEffect(() => {
    fetchwatchmovie();
  }, []);

  let settings = {
    dots: false,
    infinite: true,
    // speed: 1500,
    slidesToShow: 6,
    // initialSlide: 0,
    arrows: false,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",

    slidesToScroll: 3,
  };
  return (
    <div className="container">
      {/* <div className="moviewatch-main"> */}
      <div
        className={
          props.type === "popular"
            ? "moviewatch-main"
            : "moviewatch-main-second"
        }
      >
        {props.type === "popular" && (
          <div className="moviewatch-head">
            <div className="moviewatch-title">
              <p>{props.title}</p>
              {/* {props.type === "popular" ? <><p>{props.title}</p></> : ""} */}
            </div>
            <div className="filter-btn">
              <button
                type="button"
              >
                Filters <FaChevronDown/>
              </button>
            </div>
          </div>
        )}

        {props.type === "285/similar" && (
          <div className="moviewatch-head-rec">
            <div className="moviewatch-title">
              <p>{props.title}</p>
              {/* {props.type === "popular" ? <><p>{props.title}</p></> : ""} */}
            </div>
            <div className="lan-btn" style={{ marginTop: "20px" }}>
              <button className="rec-btn" style={{ background: "#E43109" }}>
                Hindi
              </button>
              <button className="rec-btn">Bengali</button>
              <button className="rec-btn">Marathi</button>
              <button className="rec-btn">Hindi</button>
              <button className="rec-btn">Telugu</button>
              <button className="rec-btn" style={{ background: "#E43109" }}>
                Tamil
              </button>
              <button className="rec-btn">Malayalam</button>
            </div>
          </div>
        )}

        {props.type === "top_rated" && (
          <div className="moviewatch-head">
            <div className="moviewatch-title">
              <p>{props.title}</p>
              {/* {props.type === "popular" ? <><p>{props.title}</p></> : ""} */}
            </div>
          </div>
        )}

        <div className="cards-div-main">
          {/* <Cards/> */}

          <Slider {...settings}>
            {watchmovie.map((movie) => {
              return (
                <>
                  {/* <p> {movie.overview}</p> */}
                  <Cards movies={movie} />
                </>
              );
            })}
          </Slider>
        </div>

        <div className="container text-center mt-5 mb-5 showmore-btn-main">
          {props.type === "top_rated" && (
            <>
              <div className="showmore-btn">
                <button>
                  Show More <BsChevronDown />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
