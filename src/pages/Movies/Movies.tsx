import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/Button';
import Card from 'components/Card';
import { FunctionComponent, useEffect, useState } from 'react';
import { selectCurrentPage, selectMovies } from 'redux/features/movie/movieSelector';
import { moviesAction } from 'redux/features/movie/movieSlide';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { movieDbServices } from 'services/movieDbServices';
import { GetMovieResponse, Movie, MovieResponse } from 'models/movie';

type Props = {};

const Movies: FunctionComponent<Props> = () => {
  const movies = useAppSelector(selectMovies);
  const currentPage = useAppSelector(selectCurrentPage);
  const [isMovieLoading, setIsMovieLoading] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (movies.length) return;
    getMovies();
  }, []);

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

  return <>
    <div className='text-center'>
      <h1 className="text-4xl font-bold leading-none text-white font-sans pb-6 flex-col-center pt-6 text-centers">Movies</h1>
    </div>
    <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-8">
      {movies.length &&
        movies.map((movie: Movie) => {
          return <Card movie={movie} key={movie.id}></Card>;
        })}
    </div>
    <div className="flex mt-4 justify-center">
      <Button
        childComponent={
          <>
            View more <FontAwesomeIcon icon={faArrowRight} size="1x" className="ml-4" />
          </>
        }
        onClick={loadMoreMovies}
        className="mt-2 inline-block text-white py-2 px-4 rounded bg-transparent font-semibold text-xl"
      />
    </div></>;
};

export default Movies