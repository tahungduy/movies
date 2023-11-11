import React, { FC } from "react";

type Props = {
  className: string;
};

const Icon: FC<Props> = (props: Props) => {
  const { className } = props;
  return <i className={className}></i>;
};

export default Icon;
