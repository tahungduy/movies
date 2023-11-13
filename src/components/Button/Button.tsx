import { FC, ReactNode } from "react";

type Props = {
  className?: string;
  childComponent?: ReactNode;
  onClick?: () => void;
};

const Button: FC<Props> = (props: Props) => {
  const { className, childComponent, onClick } = props;
  return (
    <button className={className} onClick={onClick}>
      {childComponent}
    </button>
  );
};

export default Button;
