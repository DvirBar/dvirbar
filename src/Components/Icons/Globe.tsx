import React from "react";

interface IProps {
  color?: string;
  className?: string;
  height: number;
  width: number;
}

function Globe({ color, className, height, width }: IProps): JSX.Element {
  const style = {
    fill: "none",
    stroke: color || "#000",
    strokeMiterlimit: "10",
    strokeWidth: "10px",
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      height={height}
      width={width}
      viewBox="0 0 293.46 293.46"
    >
      <g {...style} id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path
            className="cls-1"
            d="M288.46,146.73A141.65,141.65,0,0,1,146.77,288.46h-.08A141.73,141.73,0,1,1,146.69,5h.08A141.65,141.65,0,0,1,288.46,146.73Z"
          />
          <line className="cls-1" x1="5" y1="146.73" x2="288.46" y2="146.73" />
          <line className="cls-1" x1="146.73" y1="5" x2="146.73" y2="288.46" />
          <path
            className="cls-1"
            d="M245.94,45.47A176.08,176.08,0,0,1,199.17,68a177.3,177.3,0,0,1-52.44,7.88A177.35,177.35,0,0,1,94.29,68,176.08,176.08,0,0,1,47.52,45.47,141.39,141.39,0,0,1,146.69,5h.08A141.39,141.39,0,0,1,245.94,45.47Z"
          />
          <path
            className="cls-1"
            d="M146.73,5h0a178.24,178.24,0,0,0-52.4,63,177.5,177.5,0,0,0,0,157.48,178.24,178.24,0,0,0,52.4,63"
          />
          <path
            className="cls-1"
            d="M245.94,45.47a141.83,141.83,0,0,1,0,202.52"
          />
          <path
            className="cls-1"
            d="M217.6,146.73a176.26,176.26,0,0,1-18.43,78.74,178.14,178.14,0,0,1-52.4,63h-.08A141.73,141.73,0,1,1,146.69,5h.08a178.14,178.14,0,0,1,52.4,63A176.26,176.26,0,0,1,217.6,146.73Z"
          />
          <path className="cls-1" d="M47.52,248a176.7,176.7,0,0,1,198.42,0" />
        </g>
      </g>
    </svg>
  );
}

export default Globe;
