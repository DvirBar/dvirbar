import { useEffect } from "react";

type Callback = () => void;

function useOnScroll(callback: Callback): void {
  useEffect(() => {
    window.addEventListener("resize", callback);

    return () => {
      window.removeEventListener("resize", callback);
    };
  });
}

export default useOnScroll;
