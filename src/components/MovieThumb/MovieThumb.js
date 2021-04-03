import React from "react";
import { string, number } from "prop-types";

export default function MovieThumb({ ...movieThumb }) {
  const { image } = movieThumb;

  return (
    <div>
      <img src={image} alt="moviethumb" />
    </div>
  );
}

MovieThumb.propTypes = {
  image: string,
  movieId: number,
  movieName: string,
};
