import React from "react";

interface IProps {
  children: React.ReactNode;
  className?: string;
}

function CardBody({ children, className }: IProps): JSX.Element {
  return <div className={className}>{children}</div>;
}

export default CardBody;
