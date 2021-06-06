import React from "react";
import { IconProps } from "./icons";

function ColorPalette({
  color,
  className,
  height,
  width,
}: IconProps): JSX.Element {
  const style = {
    fill: color || "#000",
    stroke: color || "#000",
    strokeMiterlimit: "10",
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      height={height}
      width={width}
      viewBox="0 0 261.08 284.46"
    >
      <g {...style} id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path
            className="cls-1"
            d="M129.17.5C58.12.5.5,63.49.5,141.2c0,89,94.73,155.54,128.67,140.68,35.61-15.55,4.07-120.58,52.91-145.09,31.23-15.67,66,16.25,75.77,4.41C273.23,122.56,222.76.5,129.17.5Zm-89.69,177a16.3,16.3,0,1,1,16.31-16.3A16.29,16.29,0,0,1,39.48,177.5Zm7.93-68a16.3,16.3,0,1,1,16.3-16.31A16.31,16.31,0,0,1,47.41,109.53ZM88,58.26A16.31,16.31,0,1,1,104.29,42,16.31,16.31,0,0,1,88,58.26Zm63.1-10.19a16.31,16.31,0,1,1,16.3-16.31A16.3,16.3,0,0,1,151.09,48.07Z"
          />
        </g>
      </g>
    </svg>
  );
}

export default ColorPalette;
