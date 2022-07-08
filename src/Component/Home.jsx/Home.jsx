import React, { useEffect, useState } from "react";
import axios from "axios";
import { BsFillPlayFill, BsPlusLg } from "react-icons/bs";
import "./home.css";

export default function Home() {
  const [movie, setMovieData] = useState();
  const [movieimg, setMovieImg] = useState();

  async function fetchmovie() {
    const url =
      "https://api.themoviedb.org/3/movie/35?api_key=2de9acb8797cc1e7f20a96cdc13bdb0a";
    const res = await axios.get(url);
    const data = res.data;
    setMovieData(data);
    // console.log(data);

    const imgapi = await axios.get(
      "https://api.themoviedb.org/3/tv/112836/images?api_key=2de9acb8797cc1e7f20a96cdc13bdb0a"
    );
    setMovieImg(imgapi.data);
    // console.log(imgapi.data);
  }
  useEffect(() => {
    fetchmovie();
  }, []);
  return (
    <>
      <div className="container-fluid img-div">
        <div className="img-back-main">
          <img
            src={`https://image.tmdb.org/t/p/original/${movieimg?.backdrops[4].file_path}`}
          />
        </div>

        <div className="logo-side-main">
          <div className="logo-sub">
            <img
              src={`https://image.tmdb.org/t/p/original/${movieimg?.logos[1].file_path}`}
            />
          </div>

          <div className="overview">
            <p>{movie?.overview}</p>
          </div>
          <div className="genres">
            <p className="gen-p">GENRES</p>
            <p className="gen-name">{movie?.genres[2].name}</p>
          </div>

          <div className="logo-button">
            <button className="watch-btn">
              WATCH <BsFillPlayFill size={35} />
            </button>

            <button className="list-btn">
              MY LIST <BsPlusLg size={18} />
            </button>
          </div>

          <div className="release-div">
            {/* <p>{movie?.release_date}</p> */}
            <p>{new Date(movie?.release_date).getFullYear()}</p>
          </div>
        </div>
      </div>
    </>
  );
}
