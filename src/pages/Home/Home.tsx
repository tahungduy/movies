/* eslint-disable react-hooks/exhaustive-deps */
import CarouselItem from "components/CarouselItem";
import "./styled.scss";
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
import Icon from "components/Icon";
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
      .catch((error) => {});
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
        <h1 className="section-title flex-col-center ">Top movies</h1>
        {trendingMoviesCarouselItem.length > 0 && (
          <Slide
            nextArrow={
              <Icon className="fa fa-arrow-right arrow-icon bg-black-opacity-70" />
            }
            prevArrow={
              <Icon className="fa fa-arrow-left arrow-icon bg-black-opacity-70" />
            }
            duration={1000000}
          >
            {trendingMoviesCarouselItem}
          </Slide>
        )}
        <h1 className="section-title flex-col-center pt-6">Movies</h1>
        <div className="grid-container">
          {movies.length &&
            movies.map((movie: Movie) => {
              return <Card movie={movie} key={movie.id}></Card>;
            })}
        </div>
        <div className="button-container">
          <Button
            childComponent={
              <>
                View more <Icon className="fa fa-arrow-right text-xs ml-4" />
              </>
            }
            onClick={loadMoreMovies}
            className="load-more-button"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
