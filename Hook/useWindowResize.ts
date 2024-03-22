import { useEffect, useState } from "react";

export const useWindowResize = (
  windowWidth: number,
  compareParam: "grt" | "lst" | "grteq" | "lsteq"
) => {
  const [isScreen, setScreen] = useState<boolean>(false);
  useEffect(() => {
    //* listen for screensize changes
    function resize() {
      const compareWidth = {
        grt: window.innerWidth > windowWidth,
        lst: window.innerWidth < windowWidth,
        grteq: window.innerWidth >= windowWidth,
        lsteq: window.innerWidth <= windowWidth,
      };
      setScreen(compareWidth[compareParam]);
    }
    window.addEventListener("resize", resize);
    //*run the function as immediate because the change event dosen't happen in first render
    resize();
    return () => window.removeEventListener("resize", resize);
  }, []);

  return isScreen;
};
