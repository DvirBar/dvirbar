import React from "react";

interface IProps {
  color?: string;
  className?: string;
  height: number;
  width: number;
}

function More({ color, className, height, width }: IProps): JSX.Element {
  const style = {
    fill: color || "#000",
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      height={height}
      width={width}
      {...style}
      viewBox="0 0 92.94 25.19"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <circle className="cls-1" cx="12.6" cy="12.6" r="12.6" />
          <circle className="cls-1" cx="46.47" cy="12.6" r="12.6" />
          <circle className="cls-1" cx="80.34" cy="12.6" r="12.6" />
        </g>
      </g>
    </svg>
  );
}

export default More;
