/* eslint-disable react-hooks/exhaustive-deps */
import CarouselItem from "components/CarouselItem";
import { FunctionComponent, ReactNode, useEffect, useState } from "react";
import { movieDbServices } from "services/movieDbServices";
import Card from "components/Card";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import {
  selectPopularMovies,
  selectTrendingMovies,
} from "redux/features/movie/movieSelector";
import { moviesAction } from "redux/features/movie/movieSlide";
import { GetMovieResponse, Movie, MovieResponse } from "models/movie";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Home: FunctionComponent = () => {
  const popularMovies = useAppSelector(selectPopularMovies);
  const trendingMovies = useAppSelector(selectTrendingMovies);
  const [isMovieLoading, setIsMovieLoading] = useState<boolean>(false);
  const [trendingMoviesCarouselItem, setTrendingMoviesCarouselItem] = useState<
    ReactNode[]
  >([]);

  const arrows = {
    leftArrow: <FontAwesomeIcon icon={faArrowLeft} size="1x" className="ml-4 text-white border border-yellow-500 mr-4 p-4 bg-black bg-opacity-70" />,
    rightArrow: <FontAwesomeIcon icon={faArrowRight} size="1x" className="ml-4 text-white border border-yellow-500 mr-4 p-4 bg-black bg-opacity-70" />,
  }

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (trendingMovies.length && popularMovies.length) return;
    getTrendingMovies();
    getPopularMovies();
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

  const getPopularMovies = async () => {
    if (isMovieLoading) return;
    await setIsMovieLoading(true);
    dispatch(moviesAction.setPage(1));
    movieDbServices
      .getMovies(1)
      .then((response: GetMovieResponse) => {
        dispatch(moviesAction.addPopularMovies(mapMovieResponse(response.results)));
        setIsMovieLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movies popular: ", error)
      });
  };

  const getTrendingMovies = () => {
    movieDbServices.getTrendingMovies().then((response: GetMovieResponse) => {
      dispatch(
        moviesAction.addTrendingMovies(mapMovieResponse(response.results))
      );
    }).catch((error) => {
      console.error("Error fetching movies trending: ", error)
    });
  };

  const mapMovieResponse = (data: MovieResponse[]) => {
    return data.map((movie: MovieResponse) => ({
      id: movie.id,
      name: movie.title,
      description: movie.overview,
      backdropPath: movie.backdrop_path,
      posterPath: movie.poster_path,
      rating: parseFloat(movie.vote_average.toFixed(1)),
    }));
  };

  return (
    <>
      <div className="mb-6">
        {trendingMoviesCarouselItem.length > 0 && (
          <Slide
            arrows
            nextArrow={
              arrows.rightArrow
            }
            prevArrow={
              arrows.leftArrow
            }
            duration={5000}
          >
            {trendingMoviesCarouselItem}
          </Slide>
        )}
        <h1 className="text-4xl font-bold leading-none text-white font-sans py-6 text-center">Popular Movies</h1>
        <div className="px-4 ">
          {popularMovies.slice(0, 20).length > 0 && (
            <Slide
              arrows
              autoplay={false}
              infinite
              slidesToShow={5}
              slidesToScroll={5}
              cssClass="items-center"
              nextArrow={
                arrows.rightArrow
              }
              prevArrow={
                arrows.leftArrow
              }
            >
              {
                popularMovies.length &&
                popularMovies.map((movie: Movie) => {
                  return <div className="p-4 max-w-xs flex justify-center" key={movie.id}><Card movie={movie} /></div>;
                })
              }
            </Slide>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
