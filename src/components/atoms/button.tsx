import React, { FC } from "react";
import { Button } from "react-bootstrap";

type Props = {
  children: React.ReactNode;
  onClick?: React.MouseEvent<HTMLInputElement>;
  size: "sm" | "lg";
  color?: string;
};
const Btn: FC<Props> = (props) => {
  const { children, onClick, size, color } = props;
  return (
    <Button onClick={() => onClick} size={size} variant={color}>
      {children}
    </Button>
  );
};

export default Btn;
