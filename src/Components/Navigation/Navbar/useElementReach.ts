import React, { useEffect } from "react";

function useElementReach(
  ref: React.RefObject<HTMLElement>,
  callback: () => void
): void {
  const listener = () => {
    const elementHeight = ref.current?.scrollHeight;
    const elementPosition = ref.current?.offsetTop;
    const scrollY = window.pageYOffset;

    if (typeof elementPosition !== "undefined" && elementHeight) {
      const top = elementPosition - 100;
      const bottom = elementPosition + elementHeight * 0.6;

      if (scrollY >= top && scrollY <= bottom) {
        callback();
      }
    }
  };

  useEffect(() => {
    if (ref?.current) {
      window.addEventListener("scroll", listener);
    }

    return () => window.removeEventListener("scroll", listener);
  }, []);
}

export default useElementReach;
