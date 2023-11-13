import Button from "components/Button";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Movie } from "types/movie";
import ImageFromPath from "components/ImageFromPath";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export type Props = {
  movie: Movie;
};

const Card: FC<Props> = (props) => {
  const navigate = useNavigate();
  const { movie } = props;
  return (
    <div className="bg-black pb-4 bg-opacity-70 shadow-md rounded-lg overflow-hidden max-w-md">
      <ImageFromPath path={movie?.posterPath} alt={movie.name} className="w-full h-3/4 object-cover" />
      <div className="p-4">
        <h4 className="text-lg font-bold text-white line-clamp-1 overflow-hidden text-ellipsis">{movie?.name}</h4>
        <p className="text-gray-500 font-bold">
          Vote average:
          <span className="pl-1 text-yellow-400">{movie?.rating}</span>
        </p>
        <div className="flex mt-4 justify-end">
          <Button
            childComponent={
              <>
                More details <FontAwesomeIcon icon={faArrowRight} size="1x" className="ml-4" />
              </>
            }
            className="mt-2 inline-block bg-yellow-500 text-white font-bold py-2 px-4 rounded-md"
            onClick={() => navigate(`movie/${movie.id}`)}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
