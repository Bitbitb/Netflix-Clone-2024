import React, { useEffect, useRef, useState } from "react";
import "./row.css";
import axios from "../../../utils/axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

function Row({ title, fetchUrl, isLargeRow, trailerPlay, setTrailerPlay }) {
  const [movies, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    (async () => {
      try {
        // console.log(fetchUrl);
        const request = await axios.get(fetchUrl);
        // console.log(request);

        setMovie(request.data.results);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, [fetchUrl]);

 
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl();
      setTrailerPlay("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name).then(
        (url) => {
          //    console.log(url);
          const urlParams = new URLSearchParams(new URL(url).search);
          //    console.log(urlParams);
          //    console.log(urlParams.get("v"));
          setTrailerUrl(urlParams.get("v"));
          setTrailerPlay(title)
        }
        
      );
    }
  };
 

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h1>{title}</h1>

      <div className="row__posters">
        {movies?.map((movie, index) => {
          const imagePath = isLargeRow
            ? movie.poster_path
            : movie.backdrop_path;
          //    console.log(imagePath);
          return imagePath ? (
            <img
              key={index}
              onClick={() => handleClick(movie)}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            />
          ) : null;
        })}
      </div>

    
        <div style={{ padding: "40px" }}>
          {trailerUrl && trailerPlay === title && (<YouTube videoId={trailerUrl} opts={opts} />
          )}
        </div>
    
    </div>
  );
}

export default Row;
