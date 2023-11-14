import React, { FC } from "react";
import dummyImage from 'assets/dummy-image.png';
type Props = {
  path: string | undefined;
  className: string;
  alt: string;
};

const ImageFromPath: FC<Props> = (props: Props) => {
  const { path, className, alt } = props;
  return (
    <img
      src={path ? `${process.env.REACT_APP_IMAGE_BASE_URL}${path}` : dummyImage}
      alt={alt}
      className={className}
    />
  );
};

export default ImageFromPath;
