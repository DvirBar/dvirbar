import React from "react";
import { IconProps } from "./icons";

function CodeWindow({
  color,
  className,
  height,
  width,
}: IconProps): JSX.Element {
  const style = {
    fill: "none",
    stroke: color || "#000",
    strokeMiterlimit: "10",
    strokeWidth: "10px",
  };

  const styleCls2 = {
    fill: "#be1622",
  };

  const styleCls3 = {
    fill: "#f9b233",
  };

  const styleCls4 = {
    fill: "#063",
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      height={height}
      width={width}
      viewBox="0 0 298.81 293.46"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <line
            {...style}
            className="cls-1"
            x1="171.66"
            y1="85.23"
            x2="124.95"
            y2="253.68"
          />
          <polyline
            {...style}
            className="cls-1"
            points="118.13 107.72 48.21 168.9 118.13 230.09"
          />
          <polyline
            {...style}
            className="cls-1"
            points="181.11 230.09 251.03 168.9 181.11 107.72"
          />
          <path
            {...style}
            className="cls-1"
            d="M5,53.14H293.81a0,0,0,0,1,0,0v207a28.35,28.35,0,0,1-28.35,28.35H33.35A28.35,28.35,0,0,1,5,260.12v-207A0,0,0,0,1,5,53.14Z"
          />
          <path
            {...style}
            className="cls-1"
            d="M33.35,5H265.47a28.35,28.35,0,0,1,28.35,28.35V53.14a0,0,0,0,1,0,0H5a0,0,0,0,1,0,0V33.35A28.35,28.35,0,0,1,33.35,5Z"
          />
          <circle
            {...styleCls2}
            className="cls-2"
            cx="45.11"
            cy="29.07"
            r="8.02"
          />
          <circle
            {...styleCls3}
            className="cls-3"
            cx="87.9"
            cy="29.07"
            r="8.02"
          />
          <circle
            {...styleCls4}
            className="cls-4"
            cx="66.51"
            cy="29.07"
            r="8.02"
          />
        </g>
      </g>
    </svg>
  );
}

export default CodeWindow;
