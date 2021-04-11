import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router";
import Actor from "../../components/Actor/Actor";
import FourColGrid from "../../components/FourColGrid/FourColGrid";
import MovieInfo from "../../components/MovieInfo/MovieInfo";
import MovieInfoBar from "../../components/MovieInfoBar/MovieInfoBar";
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

  const fetchItems = useCallback(
    async (endpoint) => {
      try {
        const result = await (await fetch(endpoint)).json();
        if (result.status_code) {
          setState({ loading: false });
        } else {
          const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
          const creditsResult = await (await fetch(creditsEndpoint)).json();
          const directors = creditsResult.crew.filter(
            (member) => member.job === "Director"
          );
          setState({
            movie: result,
            actors: creditsResult.cast,
            directors,
            loading: false,
          });
        }
      } catch (error) {
        console.log(error);
      }
    },
    [movieId]
  );

  useEffect(() => {
    setState({ loading: true });
    const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`;
    fetchItems(endpoint);
  }, [fetchItems, movieId]);

  return (
    <div>
      <Navigation movie={props.location.movieName} />
      <MovieInfo movie={state.movie} directors={state.directors} />
      <MovieInfoBar
        time={state.movie?.runtime}
        budget={state.movie?.budget}
        revenue={state.movie?.revenue}
      />

      {state.actors ? (
        <div className="container mx-auto">
          <FourColGrid header={"Actors Judul"}>
            {state.actors.map((element, i) => {
              return <Actor key={i} actor={element} />;
            })}
          </FourColGrid>
        </div>
      ) : null}
      {state.loading ? <Spinner /> : null}
    </div>
  );
}
