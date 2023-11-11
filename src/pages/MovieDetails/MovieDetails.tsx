/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieDbServices } from "services/movieDbServices";
import {
  Genre,
  MovieDetail,
  MovieDetailResponse,
  ProductionCompany,
} from "types/movie";
import "./styled.scss";
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
      .then((response: MovieDetailResponse) => {
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
      });
  };

  return movieDetail ? (
    <div
      className="bg-image-movie-details"
      style={{
        backgroundImage: `url(${imgURLPath}${movieDetail.backdropPath}`,
      }}
    >
      <div className="bg-black-opacity-70 movie-details-container">
        <div className="col-span-3 p-32">
          <div className="title"> {movieDetail.name}</div>
          <tr className="genres">
            {movieDetail.genres.map((genre: Genre) => (
              <td>{genre.name}</td>
            ))}
          </tr>
          <p className="rating">
            {`Vote average: `}
            <span className="text-yellow-400">{movieDetail?.rating}</span>
          </p>
          <div className="description">{movieDetail.description}</div>
          <div>
            <p className="produced-by">Produced by:</p>
            <tr className="companies">
              {movieDetail.productionCompanies.map(
                (productionCompany: ProductionCompany) => (
                  <td>{productionCompany.name}</td>
                )
              )}
            </tr>
          </div>
        </div>
        <div className="col-span-2 flex">
          <div className="p-16">
            <ImageFromPath
              path={movieDetail?.posterPath}
              alt=""
              className="poster shadow-md rounded-lg "
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
