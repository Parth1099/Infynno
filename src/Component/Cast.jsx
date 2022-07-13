import axios from "axios";
import "./Cards.css";
import ReactPlayer from 'react-player/youtube'


import React, { useEffect, useState } from "react";
import { height } from "@mui/system";

export default function Cast(id) {
  const [cast, setCast] = useState([]);
  const [videoplayer, setVideo]=useState([]);

  //   console.log(id,"cast page id")

  async function fetchwatchmovie() {
    const url = `https://api.themoviedb.org/3/movie/${id.id}/credits?api_key=2de9acb8797cc1e7f20a96cdc13bdb0a`;
    const res = await axios.get(url);
    const data = res.data;
    console.log(data);
    setCast(data.cast);
  }

  async function fetchvideo()
  {
    const url = `https://api.themoviedb.org/3/movie/${id.id}/videos?api_key=2de9acb8797cc1e7f20a96cdc13bdb0a`;
    const res = await axios.get(url);
    const data =res.data;
    console.log(data ,"Video Data")
    setVideo(data.results[0])
  }
  useEffect(() => {
    fetchwatchmovie();
    fetchvideo();
  }, []);

  return (
    <>
      <div className="cast-main">
        <div className="trailor-main">
            <div className="mb-2"><h6>TRAILER</h6></div>
            <ReactPlayer height={"190px"} width={"400px"} url={`https://www.youtube.com/watch?v=${videoplayer.key}` } />

        </div>
        <div className="crew-cast-main">
        <div className="cast-title">CAST AND CREW INFO</div>
        <div className="crew-main">
                  
        {cast.map((cast) => {
          return (
            <>
              <div className="crew-info main">
             
                  <div className="crew-img-main">
                    <img
                      src={`https://image.tmdb.org/t/p/original/${cast?.profile_path}`}
                    />
                  </div>
                  <div className="crew-name">
                    <p>{cast.name}</p>
                  </div>

                  <div className="crew-name-sub">
                    <p>{cast.character}</p>
                  </div>
                
              </div>
            </>
          );
        })}
</div>
        <div className="cast-show-more container text-center" >
            <button >Show More</button>
        </div>
        </div>
      </div>
    </>
  );
}
