import React from "react";
import { FaImdb } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { AiTwotoneHeart } from "react-icons/ai";

export default function Cards({ movies }) {
  return (
    <div className="container card-main">
      <div className="card-sub-main">
        <div className="card-img-div">
          <img src={`https://image.tmdb.org/t/p/w185/${movies?.poster_path}`} />
        </div>
        <div className="card-heading">
          <p>{movies?.original_title}</p>
        </div>


        <div className="card-last-div">
          <div className="year-div">
            <div>
              <p>{new Date(movies?.release_date).getFullYear()}</p>
            </div>
            <div className="card-icon-main">
              <div className="card-icon">
                <FaImdb size={33} />
              </div>
              <div>
                <p>{movies?.vote_average}</p>
              </div>
            </div>
          </div>
          <div className="year-right">
            <FiEye size={14} />
            <AiTwotoneHeart size={14} />
          </div>
        </div>
      </div>
    </div>
  );
}
