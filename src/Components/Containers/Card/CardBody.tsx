import React from "react";

interface IProps {
  children: React.ReactNode;
}

function CardBody({ children }: IProps): JSX.Element {
  return <div>{children}</div>;
}

export default CardBody;
