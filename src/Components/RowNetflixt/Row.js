import React, { useState, useEffect } from "react";
import axios from "../../axios";
import "./Row.css";
import YouTube from "react-youtube"
import movieTrailer from "movie-trailer"
import {filterData} from '../../utils/helper'

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  // const [filteredMovies, setFilteredMovies] = useState([]);
  //  const [searchText, setSearchText] = useState("");
  const [trailerUrl, setTrailerUrl] = useState("")
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      // setFilteredMovies(request.data.results)
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  const opts = {
    heighr: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    }
  }
  const handleClick = (movie) => {
    if(trailerUrl){
      setTrailerUrl('')
    }else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
      .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search)
        setTrailerUrl(urlParams.get('v'))
      })
      .catch((error) => console.log(error))
    }
  }

  return (
    <>
     {/* <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchText, movies);
            // update the state - restaurants
            setFilteredMovies(data);
          }}
        >
          Search
        </button>
      </div> */}
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))} 
      </div>
      <div style={{ padding: "40px"}}>
       {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
      </div>
      </>
  );
}

export default Row;
