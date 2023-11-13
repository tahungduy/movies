/* eslint-disable react-hooks/exhaustive-deps */
import CarouselItem from "components/CarouselItem";
import { FC, ReactNode, useEffect, useState } from "react";
import { movieDbServices } from "services/movieDbServices";
import Card from "components/Card";
import Button from "components/Button";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import {
  selectCurrentPage,
  selectMovies,
  selectTrendingMovies,
} from "redux/features/movie/movieSelector";
import { moviesAction } from "redux/features/movie/movieSlide";
import { GetMovieResponse, Movie, MovieResponse } from "types/movie";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Home: FC = () => {
  const movies = useAppSelector(selectMovies);
  const trendingMovies = useAppSelector(selectTrendingMovies);
  const currentPage = useAppSelector(selectCurrentPage);
  const [isMovieLoading, setIsMovieLoading] = useState<boolean>(false);
  const [trendingMoviesCarouselItem, setTrendingMoviesCarouselItem] = useState<
    ReactNode[]
  >([]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (trendingMovies.length && movies.length) return;
    getTrendingMovies();
    getMovies();
  }, []);

  useEffect(() => {
    if (trendingMovies.length) {
      setTrendingMoviesCarouselItem(
        trendingMovies?.map((movie: Movie) => (
          <CarouselItem movie={movie} key={movie.id} />
        ))
      );
    }
  }, [trendingMovies]);

  const getMovies = async () => {
    if (isMovieLoading) return;
    await setIsMovieLoading(true);
    const nextPage = currentPage + 1;
    dispatch(moviesAction.setPage(nextPage));
    movieDbServices
      .getMovies(nextPage)
      .then((response: GetMovieResponse) => {
        dispatch(moviesAction.addMovies(mapMovieResponse(response.results)));
        setIsMovieLoading(false);
      })
      .catch((error) => { });
  };

  const getTrendingMovies = () => {
    movieDbServices.getTrendingMovies().then((response: GetMovieResponse) => {
      dispatch(
        moviesAction.addTrendingMovies(mapMovieResponse(response.results))
      );
    });
  };

  const mapMovieResponse = (data: MovieResponse[]) => {
    return data.map((movie: MovieResponse) => ({
      id: movie.id,
      name: movie.name || movie.title,
      description: movie.overview,
      backdropPath: movie.backdrop_path,
      posterPath: movie.poster_path,
      rating: parseFloat(movie.vote_average.toFixed(1)),
    }));
  };

  const loadMoreMovies = async () => {
    getMovies();
  };

  return (
    <>
      <div className="mb-6">
        <h1 className="text-4xl font-bold leading-none text-white font-sans pb-6 text-center">Popular movies</h1>
        {trendingMoviesCarouselItem.length > 0 && (
          <Slide
            arrows
            nextArrow={
              <FontAwesomeIcon icon={faArrowRight} size="1x" className="ml-4 text-white border border-yellow-500 mr-4 p-4 bg-black bg-opacity-70" />
            }
            prevArrow={
              <FontAwesomeIcon icon={faArrowLeft} size="1x" className="ml-4 text-white border border-yellow-500 mr-4 p-4 bg-black bg-opacity-70" />
            }
            duration={5000}
          >
            {trendingMoviesCarouselItem}
          </Slide>
        )}
        <h1 className="text-4xl font-bold leading-none text-white font-sans pb-6 flex-col-center pt-6 text-centers">Movies</h1>
        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-8">
          {movies.length &&
            movies.map((movie: Movie) => {
              return <Card movie={movie} key={movie.id}></Card>;
            })}
        </div>
        <div className="flex mt-4 justify-end">
          <Button
            childComponent={
              <>
                View more <FontAwesomeIcon icon={faArrowRight} size="1x" className="ml-4" />
              </>
            }
            onClick={loadMoreMovies}
            className="mt-2 inline-block text-white py-2 px-4 rounded-md bg-transparent font-semibold text-xl"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
