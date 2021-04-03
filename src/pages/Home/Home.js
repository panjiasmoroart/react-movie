import React from "react";
import FourColGrid from "../../components/FourColGrid/FourColGrid";
import HeroImage from "../../components/HeroImage/HeroImage";
import LoadMoreButton from "../../components/LoadMoreButton/LoadMoreButton";
import MovieThumb from "../../components/MovieThumb/MovieThumb";
import SearchBar from "../../components/SearchBar/SearchBar";
import Spinner from "../../components/Spinner/Spinner";
import Footer from "../../parts/Footer";
import {
  API_URL,
  API_KEY,
  BACKDROP_SIZE,
  IMAGE_BASE_URL,
  POSTER_SIZE,
} from "../../utils/config";

export default function Home() {
  const [state, setState] = React.useState({ movies: [] });
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  const fetchMovies = async (endpoint) => {
    setIsError(false);
    setIsLoading(true);

    try {
      const result = await (await fetch(endpoint)).json();
      // console.log(result);
      setState((prev) => ({
        heroImage: result.results[0],
        movies: [...result.results],
      }));
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  }; // end fetchMovies

  // run once on mount
  React.useEffect(() => {
    fetchMovies(`${API_URL}movie/popular?api_key=${API_KEY}`);
  }, []);

  const loadMoreItems = () => {
    alert("Coming Soon...he");
  };

  return (
    <div>
      {state.heroImage && !state.searchItems ? (
        <div>
          <HeroImage
            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}/${state.heroImage.backdrop_path}`}
            title={state.heroImage.original_title}
            text={state.heroImage.overview}
          />
        </div>
      ) : null}

      <SearchBar callback="Ini sebuah props" />

      <div className="container mx-auto">
        <FourColGrid loading={isLoading}>
          {state.movies.map((element, i) => {
            return (
              <MovieThumb
                key={i}
                // clickable={}
                image={
                  element.poster_path
                    ? `${IMAGE_BASE_URL}${POSTER_SIZE}${element.poster_path}`
                    : "./images/no_image.jpg"
                }
                movieId={element.id}
                movieName={element.original_title}
              />
            );
          })}
        </FourColGrid>
      </div>

      {isLoading && !isError ? <Spinner /> : null}

      <div className="container mx-auto">
        <LoadMoreButton text="Load More" onClick={loadMoreItems} />
      </div>

      <div className="container mx-auto border-t-2 mt-12">
        <Footer />
      </div>
    </div>
  );
}
