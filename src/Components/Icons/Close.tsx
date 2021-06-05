import React from "react";

interface IProps {
  color?: string;
  className?: string;
  height: number;
  width: number;
}

function Close({ color, className, height, width }: IProps): JSX.Element {
  const style = {
    fill: "none",
    stroke: color || "#000",
    strokeMiterlimit: "10",
    strokeWidth: "5px",
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      height={height}
      width={width}
      {...style}
      viewBox="0 0 54.45 54.45"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <line className="cls-1" x1="52.68" y1="1.77" x2="1.77" y2="52.68" />
          <line className="cls-1" x1="52.68" y1="52.68" x2="1.77" y2="1.77" />
        </g>
      </g>
    </svg>
  );
}

export default Close;
