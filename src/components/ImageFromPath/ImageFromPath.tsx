import React, { FC } from "react";

type Props = {
  path: string;
  className: string;
  alt: string;
};

const ImageFromPath: FC<Props> = (props: Props) => {
  const { path, className, alt } = props;
  return (
    <img
      src={`${process.env.REACT_APP_IMAGE_BASE_URL}${path}`}
      alt={alt}
      className={className}
    />
  );
};

export default ImageFromPath;
