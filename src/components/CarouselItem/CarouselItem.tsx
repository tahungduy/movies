import React, { FC } from "react";
import "./styled.scss";
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
      <div className="display-fixed p-4 bg-black-opacity-70 max-w-lg">
        <h3 className="title">{name}</h3>
        <div className="max-w-sm">
          <p className="description">{description}</p>
        </div>
        <Button
          onClick={() => navigate(`movie/${id}`)}
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
