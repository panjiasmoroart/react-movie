import React, { useState, useEffect } from "react";
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
  const [state, setState] = useState({ movies: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchMovies = async (endpoint) => {
    setIsError(false);
    setIsLoading(true);

    // we can use URLSearchparams to get URL Params
    const params = new URLSearchParams(endpoint);
    if (!params.get("page")) {
      setState((prev) => ({
        ...prev,
        movies: [],
        searchTerm: params.get("query"),
      }));
    }

    try {
      const result = await (await fetch(endpoint)).json();
      // console.log(result);
      setState((prev) => ({
        ...prev,
        movies: [...prev.movies, ...result.results],
        heroImage: prev.heroImage || result.results[0],
        currentPage: result.page,
        totalPage: result.total_pages,
      }));
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  }; // end fetchMovies

  // run once on mount
  useEffect(() => {
    if (localStorage.getItem("HomeState")) {
      // alert("localStorage sudah ada");
      const persistedState = JSON.parse(localStorage.getItem("HomeState"));
      setState({ ...persistedState });
    } else {
      fetchMovies(`${API_URL}movie/popular?api_key=${API_KEY}`);
    }
  }, []);

  useEffect(() => {
    if (!state.searchTerm) {
      localStorage.setItem("HomeState", JSON.stringify(state));
    }
  }, [state]);

  const searchItems = (searchTerm) => {
    let endpoint = `${API_URL}search/movie?api_key=${API_KEY}&query=${searchTerm}`;

    // jika tidak ada data yg dicari
    if (!searchTerm) {
      endpoint = `${API_URL}movie/popular?api_key=${API_KEY}`;
    }

    fetchMovies(endpoint);
  };

  const loadMoreItems = () => {
    const { searchTerm, currentPage } = state;

    let endpoint = `${API_URL}search/movie?api_key=${API_KEY}&query=${searchTerm}&page=${
      currentPage + 1
    }`;

    if (!searchTerm) {
      endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&page=${
        currentPage + 1
      }`;
    }
    fetchMovies(endpoint);
  };

  return (
    <div>
      {false && isError ? <span></span> : null}
      {state.heroImage && !state.searchTerm ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}/${state.heroImage.backdrop_path}`}
          title={state.heroImage.original_title}
          text={state.heroImage.overview}
        />
      ) : null}

      <SearchBar callback={searchItems} />

      <div className="container mx-auto">
        <FourColGrid
          loading={isLoading}
          header={state.searchTerm ? "Search Result" : "Popluar Movies"}
        >
          {state.movies.map((element, i) => {
            return (
              <MovieThumb
                key={i}
                clickable={true}
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

        {isLoading ? <Spinner /> : null}

        {state.currentPage <= state.totalPage && !isLoading ? (
          <LoadMoreButton text="Load More" onClick={loadMoreItems} />
        ) : null}

        {state.currentPage <= state.totalPage && !isLoading ? (
          <div className="border-t-2 mt-12">
            <Footer />
          </div>
        ) : null}
      </div>
    </div>
  );
}
