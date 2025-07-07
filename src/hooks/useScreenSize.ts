// useScreenSize.js
import { useState, useEffect } from "react";

const useScreenSize = () => {
  const getSize = () => ({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    isMobile: typeof window !== "undefined" && window.innerWidth < 768,
    isTablet:
      typeof window !== "undefined" &&
      window.innerWidth >= 768 &&
      window.innerWidth < 1024,
    isDesktop: typeof window !== "undefined" && window.innerWidth >= 1024,
  });

  const [screenSize, setScreenSize] = useState(getSize);

  useEffect(() => {
    // Check if window is defined (for SSR)
    if (typeof window === "undefined") return;

    const handleResize = () => {
      setScreenSize(getSize());
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures effect is only run on mount

  return screenSize;
};

export default useScreenSize;
