import React from "react";

interface IProps {
  color?: string;
  className?: string;
  height: number;
  width: number;
}

function Database({ color, className, height, width }: IProps): JSX.Element {
  const style = {
    fill: color || "#000",
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      height={height}
      width={width}
      viewBox="0 0 246.64 283.46"
    >
      <g {...style} id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path
            className="cls-1"
            d="M245.93,204v30.32c-13.69,28.19-64.77,49.12-125.66,49.12-54.41,0-101-16.71-120-40.37V201.27C17.44,226.72,65.81,245,122.78,245c56.45,0,104.45-18,122.08-43.07C245.24,202.65,245.6,203.33,245.93,204Z"
          />
          <ellipse
            className="cls-1"
            cx="123.32"
            cy="64.28"
            rx="123.32"
            ry="64.28"
          />
          <path
            className="cls-1"
            d="M245.93,151.78v34.68c-16,26.5-65.38,45.82-123.87,45.82-56.19,0-104-17.83-121.83-42.74V147.21c15.41,26.93,65.25,46.64,124.34,46.64C180.27,193.85,227.73,176.34,245.93,151.78Z"
          />
          <path
            className="cls-1"
            d="M245.93,101.51v34.67C230,162.69,180.55,182,122.06,182,65.87,182,18,164.17.23,139.27V96.93c15.41,26.93,65.25,46.64,124.34,46.64C180.27,143.57,227.73,126.06,245.93,101.51Z"
          />
        </g>
      </g>
    </svg>
  );
}

export default Database;
