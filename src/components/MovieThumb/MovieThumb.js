import React from "react";
import { string, number } from "prop-types";
import { Link } from "react-router-dom";

export default function MovieThumb({ ...movieThumb }) {
  const { image, movieId, movieName, clickable } = movieThumb;

  return (
    <div>
      {clickable ? (
        <Link to={{ pathname: `/movie/${movieId}`, movieName: `${movieName}` }}>
          <img src={image} alt="moviethumb" />
        </Link>
      ) : (
        <img src={image} alt="moviethumb" />
      )}
    </div>
  );
}

MovieThumb.propTypes = {
  image: string,
  movieId: number,
  movieName: string,
};
