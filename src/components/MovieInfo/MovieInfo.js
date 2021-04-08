import React from "react";
import { BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE } from "../../utils/config";

export default function MovieInfo({ movie }) {
  return (
    <div
      className="animate-custom movie-info-custom"
      style={{
        background: movie?.backdrop_path
          ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}/${movie.backdrop_path}')`
          : "#000",
      }}
    ></div>
  );
}
