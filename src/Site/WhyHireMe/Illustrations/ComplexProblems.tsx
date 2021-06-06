import React from "react";

interface IProps {
  color?: string;
  className?: string;
  height?: number | string;
  width?: number | string;
}

function ComplexProblems({
  color,
  className,
  height,
  width,
}: IProps): JSX.Element {
  const colorToUse = color || "#000";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      viewBox="0 0 501.45 254.81"
    >
      <rect x="18.77" width="482.68" height="244.09" fill={colorToUse} />
      <circle
        cx="123.57"
        cy="83.23"
        r="52.09"
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth="5"
      />
      <line
        x1="188.94"
        y1="83.23"
        x2="58.21"
        y2="83.23"
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth="5"
      />
      <line
        x1="123.57"
        y1="148.6"
        x2="123.57"
        y2="17.87"
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth="5"
      />
      <polygon
        points="156.6 85.21 121.08 85.21 121.08 85.17 156.57 40.64 156.6 40.64 156.6 85.21"
        fill="#f4e72d"
        stroke="#f2e730"
        strokeMiterlimit="10"
      />
      <path
        d="M68.12,46.38"
        fill="none"
        stroke="#a6529a"
        strokeMiterlimit="10"
        strokeWidth="5"
      />
      <line x1="179.75" y1="153.26" x2="67.43" y2="47.38" fill="none" />
      <line
        x1="468.09"
        y1="116.67"
        x2="242.72"
        y2="116.67"
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth="5"
      />
      <line
        x1="355.4"
        y1="182.03"
        x2="355.4"
        y2="51.31"
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth="5"
      />
      <path
        d="M243.67,139.07c22.53.06,22.64-45.3,45.18-45.24s22.42,45.41,45,45.46S356.45,94,379,94s22.43,45.41,45,45.47,22.65-45.3,45.19-45.25"
        fill="none"
        stroke="#f2e730"
        strokeMiterlimit="10"
        strokeWidth="5"
      />
      <polygon
        points="0 254.81 482.36 254.81 501.45 244.09 19.09 244.09 0 254.81"
        fill="#f2e730"
      />
      <rect
        x="94.27"
        y="233.36"
        width="53.62"
        height="16.09"
        rx="4.77"
        fill="#bbbbba"
      />
      <rect
        x="73.76"
        y="232.36"
        width="33.95"
        height="5.96"
        transform="translate(-139.83 133.09) rotate(-45)"
        fill="#fff"
      />
      <path
        d="M109,220.88a3.12,3.12,0,0,1-.26.66l-1.29,1.29-2.71,2.71-4.25-4.25,2.7-2.7a0,0,0,0,0,0,0l1.29-1.29h0a2.82,2.82,0,0,1,.63-.24,3.13,3.13,0,0,1,3.86,3.85Z"
        fill="#f2e730"
      />
    </svg>
  );
}

export default ComplexProblems;
