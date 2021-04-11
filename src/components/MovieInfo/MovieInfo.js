import React from "react";
import { BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE } from "../../utils/config";
import MovieThumb from "../MovieThumb/MovieThumb";

export default function MovieInfo({ movie, directors }) {
  return (
    <div
      className="animate-custom movie-info-custom"
      style={{
        background: movie?.backdrop_path
          ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}/${movie.backdrop_path}')`
          : "#000",
      }}
    >
      <div className="container mx-auto grid grid-flow-row grid-cols-12 py-12 px-0">
        <div className="col-span-3 bg-gray-500">
          <MovieThumb
            image={
              movie?.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}/${movie?.poster_path}`
                : process.env.PUBLIC_URL + "/images/no_image.jpg"
            }
            clickable={false}
          />
        </div>
        <div className="col-span-9 bg-black bg-opacity-70 p-12 text-white">
          <h1 className="text-5xl font-medium mb-6">{movie?.title}</h1>
          <h3 className="font-semibold mb-2">PLOT</h3>
          <p className="mb-4">{movie?.overview}</p>
          <h3 className="font-semibold">IMDB RATING</h3>
          <div className="my-3 mx-0 flex items-center">
            <div className="shadow w-72 bg-white rounded-md">
              <div
                className="bg-green-500 text-xs rounded-md leading-none py-1 text-center text-white"
                style={{ width: movie?.vote_average * 10 + "%" }}
              >
                {movie?.vote_average}%
              </div>
            </div>
          </div>

          <div>
            {directors?.length > 1 ? (
              <h3 className="font-semibold mb-2">DIRECTORS</h3>
            ) : (
              <h3 className="font-semibold mb-2">DIRECTOR</h3>
            )}
            {directors?.map((element, key) => {
              return <p key={key}>{element.name}</p>;
            })}
          </div>

          <div className="flex justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="max-h-24 w-24"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
