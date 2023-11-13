import React, { FC } from "react";
import Button from "components/Button";
import { Movie } from "types/movie";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import ImageFromPath from "components/ImageFromPath";
export type CarouselItemProps = {
  movie: Movie;
};

const CarouselItem: FC<CarouselItemProps> = (props: CarouselItemProps) => {
  const { name, description, id, backdropPath } = props.movie;
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-center">
        <ImageFromPath className="h-3/4 w-3/4" path={backdropPath} alt={name} />
      </div>
      <div className="fixed top-60 transform -translate-y-1/2 ml-32 p-4 bg-black bg-opacity-70 max-w-lg">
        <h3 className="text-white font-sans text-4xl font-bold leading-none m-4 ml-0">{name}</h3>
        <div className="max-w-sm">
          <p className="text-white font-sans text-base font-semibold leading-normal m-6 ml-0 line-clamp-3 overflow-hidden text-ellipsis">{description}</p>
        </div>
        <Button
          onClick={() => navigate(`movie/${id}`)}
          className="mt-2 inline-block bg-yellow-500 text-white font-bold py-2 px-4 rounded-md"
          childComponent={
            <>
              More details <FontAwesomeIcon icon={faArrowRight} size="1x" className="ml-4" />
            </>
          }
        />
      </div>
    </div>
  );
};

export default CarouselItem;
