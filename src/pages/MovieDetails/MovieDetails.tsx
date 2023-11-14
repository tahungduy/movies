/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router";
import { movieDbServices } from "services/movieDbServices";
import {
  Genre,
  MovieDetail,
  GetMovieDetailResponse,
  ProductionCompany,
  SpokenLanguage,
  Actor,
} from "models/movie";
import ImageFromPath from "components/ImageFromPath";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Slide } from "react-slideshow-image";

const MovieDetails: FC = () => {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState<MovieDetail>();
  const imgURLPath = process.env.REACT_APP_IMAGE_BASE_URL;

  const arrows = {
    leftArrow: <FontAwesomeIcon icon={faArrowLeft} size="1x" className="ml-4 text-white border border-yellow-500 mr-4 p-4 bg-black bg-opacity-70" />,
    rightArrow: <FontAwesomeIcon icon={faArrowRight} size="1x" className="ml-4 text-white border border-yellow-500 mr-4 p-4 bg-black bg-opacity-70" />,
  }

  useEffect(() => {
    getMovieDetails();
  }, []);

  useEffect(() => {
    console.log(movieDetail);

  }, [movieDetail]);

  const getMovieDetails = async () => {
    if (id === undefined) return;
    movieDbServices
      .getMovieDetails(id)
      .then((response: GetMovieDetailResponse) => {

        setMovieDetail({
          id: response.id,
          backdropPath: response.backdrop_path,
          description: response.overview,
          posterPath: response.poster_path,
          name: response.name || response.title,
          rating: response.vote_average,
          genres: response.genres,
          voteCount: response.vote_count,
          productionCompanies: response.production_companies,
          spokenLanguages: response.spoken_languages,
          actors: response.credits?.cast
        });
        console.log({
          id: response.id,
          backdropPath: response.backdrop_path,
          description: response.overview,
          posterPath: response.poster_path,
          name: response.name || response.title,
          rating: response.vote_average,
          genres: response.genres,
          voteCount: response.vote_count,
          productionCompanies: response.production_companies,
          spokenLanguages: response.spoken_languages,
          actors: response.credits?.cast
        });

      })
      .catch((error) => console.error("Error fetching movie details: ", error));
  };

  return movieDetail ? (
    <div
      className="w-full h-full bg-cover bg-no-repeat bg-center overflow-y-scroll"
      style={{
        backgroundImage: `url(${imgURLPath}${movieDetail.backdropPath}`,
      }}
    >
      <div className="bg-black bg-opacity-70 w-full grid grid-cols-5 h-fit ">
        <div className="col-span-3 p-32 pb-0">
          <div className="text-white font-sans text-4xl font-bold leading-none m-4 ml-0"> {movieDetail.name}</div>
          <ul className="flex">
            {movieDetail.genres.map((genre: Genre) => (
              <li className="rounded bg-slate-500 bg-opacity-70 mr-4 px-2 text-white leading-10" key={genre.id}>{genre.name}</li>
            ))}
          </ul>
          <p className="text-white font-bold pt-2">
            Vote average:
            <span className="pl-1 text-yellow-400">{movieDetail?.rating}</span>
          </p>
          <div className="pt-2">
            <p className="text-white font-bold pr-4 pb-2">Languages:</p>
            <ul className="flex">
              {movieDetail?.spokenLanguages?.map(
                (spokenLanguages: SpokenLanguage) => (
                  <li className="rounded bg-slate-500 bg-opacity-70 mr-4 px-2 text-white leading-10" key={spokenLanguages.iso_639_1}>{spokenLanguages.name}</li>
                )
              )}
            </ul>
          </div>
          <div className="pt-2">
            <p className="text-white font-bold pb-2">Produced by:</p>
            <ul className="flex">
              {movieDetail.productionCompanies.map(
                (productionCompany: ProductionCompany) => (
                  <li className="rounded bg-slate-500 bg-opacity-70 mr-4 px-2 text-white leading-10" key={productionCompany.id}>{productionCompany.name}</li>
                )
              )}
            </ul>
          </div>
          <div className="text-white font-sans text-xl font-semibold pt-4 ml-0">{movieDetail.description}</div>
        </div>
        <div className="col-span-2 flex">
          <div className="p-16 pb-0">
            <ImageFromPath
              path={movieDetail?.posterPath}
              alt={movieDetail.name}
              className="w-2/3 shadow-md rounded "
            />
          </div>
        </div>
      </div>
      {
        movieDetail?.actors && <div className="pt-2 px-32 bg-black bg-opacity-70">
          <p className="text-white font-bold pb-2">Actors:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {
              movieDetail?.actors.map((actor: Actor) => {
                return <div className="flex justify-center flex-col bg-black bg-opacity-70 w-fit rounded" key={actor.cast_id}>
                  <ImageFromPath
                    path={actor.profile_path}
                    alt={actor.name}
                    className="w-72 rounded-t"
                  />
                  <p className="text-white m-4 pl-0 font-semibold">{actor.name}</p>
                </div>;
              })
            }
          </div>
        </div>
      }
    </div >
  ) : (
    <></>
  );
};

export default MovieDetails;
