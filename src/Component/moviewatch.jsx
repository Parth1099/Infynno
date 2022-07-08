import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import "./Cards.css";

export default function Moviewatch() {
  const [watchmovie, setMovieData] = useState([]);

  async function fetchwatchmovie() {
    const url =
      "https://api.themoviedb.org/3/movie/upcoming?api_key=2de9acb8797cc1e7f20a96cdc13bdb0a";
    const res = await axios.get(url);
    const data = res.data;
    console.log(data);
    setMovieData(data.results);
  }
  useEffect(() => {
    fetchwatchmovie();
  }, []);
  return (
    <div className="container">
      <div className="moviewatch-main">
        <div className="moviewatch-head">
          <div className="moviewatch-title">
            <p>MOVIE YOU MUST WATCH</p>
          </div>
          <div className="filter-btn">
            <button
              class="btn dropdown-toggle"
              type="button"
              //   data-toggle="dropdown"
            >
              Filters
            </button>
          </div>
        </div>

        <div className="cards-div-main">
                {/* <Cards/> */}
          {watchmovie.map((movie) => {
            return (
              <>
                {/* <p> {movie.overview}</p> */}
                <Cards movies= {movie} />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
