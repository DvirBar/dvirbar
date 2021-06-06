import { useEffect, useState } from "react";

interface dimObj {
  width: number;
  height: number;
}

function useWindowDim(): dimObj {
  const getDim = (): dimObj => ({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [windowDim, setWindowDim] = useState<dimObj>(getDim());

  useEffect(() => {
    const listner = () => setWindowDim(getDim());

    window.addEventListener("resize", listner);

    return () => {
      window.removeEventListener("resize", listner);
    };
  });

  return windowDim;
}

export default useWindowDim;
