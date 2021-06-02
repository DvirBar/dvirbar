import React from "react";

interface IProps {
  color?: string;
  className?: string;
  height: number;
  width: number;
}

function Code({ color, className, height, width }: IProps): JSX.Element {
  const style = {
    fill: "none",
    stroke: color || "#000",
    strokeMiterlimit: "10",
    strokeWidth: "18px",
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      height={height}
      width={width}
      viewBox="0 0 356.47 286.14"
    >
      <g {...style} id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <line
            className="cls-1"
            x1="215.33"
            y1="1.34"
            x2="136.72"
            y2="284.8"
          />
          <polyline
            className="cls-1"
            points="125.25 39.18 7.59 142.15 125.25 245.11"
          />
          <polyline
            className="cls-1"
            points="231.22 245.11 348.88 142.15 231.22 39.18"
          />
        </g>
      </g>
    </svg>
  );
}

export default Code;
