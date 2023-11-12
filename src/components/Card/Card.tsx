import Icon from "components/Icon";
import "./styled.scss";
import Button from "components/Button";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Movie } from "types/movie";
import ImageFromPath from "components/ImageFromPath";

export type Props = {
  movie: Movie;
};

const Card: FC<Props> = (props) => {
  const navigate = useNavigate();
  const { movie } = props;
  return (
    <div className="movie-card">
      <ImageFromPath path={movie?.posterPath} alt={movie.name} className="poster" />
      <div className="p-4 ">
        <h4 className="movie-name">{movie?.name}</h4>
        <p className="rating">
          {`Vote average: `}
          <span className="text-yellow-400">{movie?.rating}</span>
        </p>
        <div className="button-container">
          <Button
            childComponent={
              <>
                More details <Icon className="fa fa-arrow-right ml-4" />
              </>
            }
            onClick={() => navigate(`movie/${movie.id}`)}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
