/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router";
import { movieDbServices } from "services/movieDbServices";
import {
  Genre,
  MovieDetail,
  GetMovieDetailResponse,
  ProductionCompany,
} from "types/movie";
import ImageFromPath from "components/ImageFromPath";

const MovieDetails: FC = () => {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState<MovieDetail>();
  const imgURLPath = process.env.REACT_APP_IMAGE_BASE_URL;

  useEffect(() => {
    getMovieDetails();
  }, []);

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
        });
      })
      .catch((error) => console.error("Error fetching movie details: ", error));
  };

  return movieDetail ? (
    <div
      className="w-full h-full bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(${imgURLPath}${movieDetail.backdropPath}`,
      }}
    >
      <div className="bg-black bg-opacity-70 w-full grid grid-cols-5 h-full overflow-hidden">
        <div className="col-span-3 p-32">
          <div className="text-white font-sans text-4xl font-bold leading-none m-4 ml-0"> {movieDetail.name}</div>
          <ul className="flex">
            {movieDetail.genres.map((genre: Genre) => (
              <li className="rounded-lg bg-slate-500 bg-opacity-70 mr-4 px-2 text-white leading-10" key={genre.id}>{genre.name}</li>
            ))}
          </ul>
          <p className="text-white font-bold">
            Vote average:
            <span className="pl-1 text-yellow-400">{movieDetail?.rating}</span>
          </p>
          <div className="text-white font-sans text-xl font-semibold m-6 ml-0">{movieDetail.description}</div>
          <div>
            <p className="text-white font-bold">Produced by:</p>
            <ul className="flex">
              {movieDetail.productionCompanies.map(
                (productionCompany: ProductionCompany) => (
                  <li className="rounded-lg bg-slate-500 bg-opacity-70 mr-4 px-2 text-white leading-10" key={productionCompany.id}>{productionCompany.name}</li>
                )
              )}
            </ul>
          </div>
        </div>
        <div className="col-span-2 flex">
          <div className="p-16">
            <ImageFromPath
              path={movieDetail?.posterPath}
              alt=""
              className="h-3/4 object-cover overflow-hidden shadow-md rounded-lg "
            />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default MovieDetails;
