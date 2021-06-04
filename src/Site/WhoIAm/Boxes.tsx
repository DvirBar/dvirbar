import React from "react";

interface IProps {
  color?: string;
  className?: string;
  height?: number | string;
  width?: number | string;
}

function Boxes({ color, className, height, width }: IProps): JSX.Element {
  const style = {
    fill: color || "#000",
  };

  const styleCls2 = {
    stroke: color || "#000",
    strokeWidth: "5px",
    strokeMiterlimit: 10,
    fill: "#fff",
  };

  const styleCls3 = {
    fill: "none",
    stroke: "#fff",
    strokeWidth: "8px",
  };

  const styleCls4 = {
    stroke: color || "#000",
    strokeWidth: "5px",
    fill: "#fff",
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      height={height}
      width={width}
      viewBox="0 0 1578.31 999.32"
    >
      <g {...style} id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <rect
            className="cls-1"
            x="569.18"
            y="2.5"
            width="798.75"
            height="798.75"
            rx="14.17"
          />
          <path
            className="cls-2"
            {...styleCls2}
            d="M586.53,2.5h764.11a14.17,14.17,0,0,1,14.17,14.17V92.61a0,0,0,0,1,0,0H572.36a0,0,0,0,1,0,0V16.67A14.17,14.17,0,0,1,586.53,2.5Z"
          />
          <circle className="cls-1" cx="641.65" cy="47.88" r="19.58" />
          <circle className="cls-1" cx="692.98" cy="47.55" r="19.58" />
          <circle className="cls-1" cx="744.55" cy="47.55" r="19.58" />
          <g id="Group_1" data-name="Group 1">
            <line
              id="Line_1"
              data-name="Line 1"
              className="cls-3"
              {...styleCls3}
              x1="745.57"
              y1="207.58"
              x2="683.83"
              y2="207.58"
            />
            <line
              id="Line_2"
              data-name="Line 2"
              className="cls-3"
              {...styleCls3}
              x1="958.2"
              y1="207.58"
              x2="779.86"
              y2="207.58"
            />
            <line
              id="Line_3"
              data-name="Line 3"
              className="cls-3"
              {...styleCls3}
              x1="929.05"
              y1="261.66"
              x2="750.71"
              y2="261.66"
            />
            <line
              id="Line_4"
              data-name="Line 4"
              className="cls-3"
              {...styleCls3}
              x1="929.05"
              y1="315.74"
              x2="846.74"
              y2="315.74"
            />
            <line
              id="Line_5"
              data-name="Line 5"
              className="cls-3"
              {...styleCls3}
              x1="862.17"
              y1="369.83"
              x2="683.83"
              y2="369.83"
            />
            <line
              id="Line_6"
              data-name="Line 6"
              className="cls-3"
              {...styleCls3}
              x1="1194.84"
              y1="371.63"
              x2="1016.5"
              y2="371.63"
            />
            <line
              id="Line_7"
              data-name="Line 7"
              className="cls-3"
              {...styleCls3}
              x1="716.42"
              y1="261.66"
              x2="683.83"
              y2="261.66"
            />
            <line
              id="Line_8"
              data-name="Line 8"
              className="cls-3"
              {...styleCls3}
              x1="1073.09"
              y1="261.66"
              x2="963.34"
              y2="261.66"
            />
            <line
              id="Line_9"
              data-name="Line 9"
              className="cls-3"
              {...styleCls3}
              x1="812.44"
              y1="315.74"
              x2="683.83"
              y2="315.74"
            />
            <line
              id="Line_10"
              data-name="Line 10"
              className="cls-3"
              {...styleCls3}
              x1="1025.08"
              y1="207.58"
              x2="992.5"
              y2="207.58"
            />
            <line
              id="Line_11"
              data-name="Line 11"
              className="cls-3"
              {...styleCls3}
              x1="982.21"
              y1="371.63"
              x2="896.47"
              y2="371.63"
            />
            <line
              id="Line_12"
              data-name="Line 12"
              className="cls-3"
              {...styleCls3}
              x1="793.58"
              y1="423.91"
              x2="683.83"
              y2="423.91"
            />
            <line
              id="Line_13"
              data-name="Line 13"
              className="cls-3"
              {...styleCls3}
              x1="716.42"
              y1="477.99"
              x2="683.83"
              y2="477.99"
            />
            <line
              id="Line_14"
              data-name="Line 14"
              className="cls-3"
              {...styleCls3}
              x1="1100.53"
              y1="477.99"
              x2="1038.8"
              y2="477.99"
            />
            <line
              id="Line_15"
              data-name="Line 15"
              className="cls-3"
              {...styleCls3}
              x1="860.46"
              y1="477.99"
              x2="750.71"
              y2="477.99"
            />
            <line
              id="Line_16"
              data-name="Line 16"
              className="cls-3"
              {...styleCls3}
              x1="1004.5"
              y1="477.99"
              x2="894.75"
              y2="477.99"
            />
            <line
              id="Line_17"
              data-name="Line 17"
              className="cls-3"
              {...styleCls3}
              x1="793.58"
              y1="532.08"
              x2="683.83"
              y2="532.08"
            />
            <line
              id="Line_18"
              data-name="Line 18"
              className="cls-3"
              {...styleCls3}
              x1="1006.21"
              y1="532.08"
              x2="827.88"
              y2="532.08"
            />
            <line
              id="Line_19"
              data-name="Line 19"
              className="cls-3"
              {...styleCls3}
              x1="1073.09"
              y1="532.08"
              x2="1040.51"
              y2="532.08"
            />
            <line
              id="Line_20"
              data-name="Line 20"
              className="cls-3"
              {...styleCls3}
              x1="1139.97"
              y1="532.08"
              x2="1107.39"
              y2="532.08"
            />
            <line
              id="Line_21"
              data-name="Line 21"
              className="cls-3"
              {...styleCls3}
              x1="862.17"
              y1="586.16"
              x2="683.83"
              y2="586.16"
            />
            <line
              id="Line_22"
              data-name="Line 22"
              className="cls-3"
              {...styleCls3}
              x1="1074.81"
              y1="586.16"
              x2="896.47"
              y2="586.16"
            />
            <line
              id="Line_23"
              data-name="Line 23"
              className="cls-3"
              {...styleCls3}
              x1="1218.85"
              y1="586.16"
              x2="1109.1"
              y2="586.16"
            />
            <line
              id="Line_24"
              data-name="Line 24"
              className="cls-3"
              {...styleCls3}
              x1="766.14"
              y1="640.24"
              x2="683.83"
              y2="640.24"
            />
            <line
              id="Line_25"
              data-name="Line 25"
              className="cls-3"
              {...styleCls3}
              x1="834.74"
              y1="640.24"
              x2="802.16"
              y2="640.24"
            />
            <line
              id="Line_26"
              data-name="Line 26"
              className="cls-3"
              {...styleCls3}
              x1="978.78"
              y1="640.24"
              x2="869.03"
              y2="640.24"
            />
            <line
              id="Line_27"
              data-name="Line 27"
              className="cls-3"
              {...styleCls3}
              x1="1045.65"
              y1="640.24"
              x2="1013.07"
              y2="640.24"
            />
            <line
              id="Line_28"
              data-name="Line 28"
              className="cls-3"
              {...styleCls3}
              x1="1155.4"
              y1="694.33"
              x2="846.74"
              y2="694.33"
            />
            <line
              id="Line_29"
              data-name="Line 29"
              className="cls-3"
              {...styleCls3}
              x1="812.44"
              y1="694.33"
              x2="683.83"
              y2="694.33"
            />
          </g>
          <rect
            className="cls-4"
            {...styleCls4}
            x="2.5"
            y="366.32"
            width="630.5"
            height="630.5"
            rx="14.17"
          />
          <path
            className="cls-2"
            {...styleCls2}
            d="M16.67,366.32H618.83A14.17,14.17,0,0,1,633,380.49v57a0,0,0,0,1,0,0H2.5a0,0,0,0,1,0,0v-57A14.17,14.17,0,0,1,16.67,366.32Z"
          />
          <circle className="cls-1" cx="59.71" cy="402.14" r="15.45" />
          <circle className="cls-1" cx="100.23" cy="401.88" r="15.45" />
          <circle className="cls-1" cx="140.93" cy="401.88" r="15.45" />
          <rect
            className="cls-1"
            x="57.28"
            y="490.39"
            width="370.34"
            height="210.38"
            rx="14.17"
          />
          <rect
            className="cls-1"
            x="460.73"
            y="490.39"
            width="121.7"
            height="449.7"
            rx="14.17"
          />
          <rect
            className="cls-1"
            x="57.28"
            y="729.71"
            width="198.77"
            height="210.38"
            rx="14.17"
          />
          <rect
            className="cls-1"
            x="287.2"
            y="728.71"
            width="140.43"
            height="210.38"
            rx="14.17"
          />
          <rect
            className="cls-4"
            {...styleCls4}
            x="1268.54"
            y="280.99"
            width="307.26"
            height="630.5"
            rx="14.17"
          />
          <path
            className="cls-2"
            {...styleCls2}
            d="M1282.71,281h278.92a14.17,14.17,0,0,1,14.17,14.17v57a0,0,0,0,1,0,0H1268.54a0,0,0,0,1,0,0v-57A14.17,14.17,0,0,1,1282.71,281Z"
          />
          <circle className="cls-1" cx="1325.75" cy="316.82" r="15.45" />
          <circle className="cls-1" cx="1366.27" cy="316.56" r="15.45" />
          <circle className="cls-1" cx="1406.97" cy="316.56" r="15.45" />
          <rect
            className="cls-1"
            x="1293.11"
            y="400.02"
            width="261.6"
            height="179.37"
            rx="14.17"
          />
          <rect
            className="cls-1"
            x="1293.11"
            y="805.47"
            width="261.6"
            height="70.16"
            rx="14.17"
          />
          <rect
            className="cls-1"
            x="1293.11"
            y="607.72"
            width="160.76"
            height="172.46"
            rx="14.17"
          />
          <rect
            className="cls-1"
            x="1470.52"
            y="607.72"
            width="84.19"
            height="172.46"
            rx="14.17"
          />
        </g>
      </g>
    </svg>
  );
}

export default Boxes;
