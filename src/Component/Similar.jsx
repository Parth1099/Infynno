import axios from "axios";
import {Link } from "react-router-dom";
import "./Cards.css";

import React, { useEffect, useState } from "react";

export default function Cast(id) {
  const [similar, setSimilar] = useState([]);

  console.log(id, "cast page id");

  async function fetchwatchmovie() {
    // const url = `https://api.themoviedb.org/3/movie/${id.id}/credits?api_key=2de9acb8797cc1e7f20a96cdc13bdb0a`;
    const url = `https://api.themoviedb.org/3/movie/${id.id}/similar?api_key=2de9acb8797cc1e7f20a96cdc13bdb0a`;
    const res = await axios.get(url);
    const data = res.data;
    console.log(data, "similar data");
    setSimilar(data.results);
    // console.log(setCast,"setcast data");
  }
  useEffect(() => {
    fetchwatchmovie();
  }, [id.id]);

  return (
    <>
      {/* {similar.map((similar) => {
        return <> {similar?.popularity}</>;
      })}
      ; */}
      <div className="morelike-main">
        <div className="morelike-title">MORE LIKE THIS</div>
      <div className="morelike-sub">
        {similar.map((similar) => {
          return <>
        <div className="morelike-img-main">
          <Link to={`/moviedetails/${similar.id}`}><img src={`https://image.tmdb.org/t/p/original/${similar?.backdrop_path}`} />
          <div className="overlay">
          <p className="text">{similar.title}</p>
        </div>
        </Link>
        </div>

        
        
        </>})}
      ;
      </div>
</div>
    </>
  );
}
