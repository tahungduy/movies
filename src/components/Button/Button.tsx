import { FC, ReactNode } from "react";
import "./styled.scss";

type Props = {
  className?: string;
  childComponent?: ReactNode;
  onClick?: () => void;
};

const Button: FC<Props> = (props: Props) => {
  const { className, childComponent, onClick } = props;
  return (
    <button className={className ?? `primary-button`} onClick={onClick}>
      {childComponent}
    </button>
  );
};

export default Button;
