import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import MovieInfo from "../../components/MovieInfo/MovieInfo";
import Navigation from "../../components/Navigation/Navigation";
import Spinner from "../../components/Spinner/Spinner";
import { API_URL, API_KEY } from "../../utils/config";

export default function Movie(props) {
  const [state, setState] = useState({
    movie: null,
    actors: null,
    directors: [],
    loading: false,
  });

  // ambil movieId dari path="/movie/:movieId"
  const { movieId } = useParams();

  const fetchItems = async (endpoint) => {
    try {
      const result = await (await fetch(endpoint)).json();

      if (result.status_code) {
        setState({ loading: false });
      } else {
        setState({ movie: result });
      }
    } catch (error) {
      console.log("There was an error: ", error);
    }
  };

  useEffect(() => {
    setState({ loading: true });
    const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`;
    fetchItems(endpoint);
  }, []);

  return (
    <div>
      <Navigation movie={props.location.movieName} />
      <MovieInfo movie={state.movie} />

      {state.loading ? <Spinner /> : null}
      <div className="container mx-auto">Halaman Detail Movie</div>
    </div>
  );
}
