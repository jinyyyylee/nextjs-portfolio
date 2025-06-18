import React, { useEffect, useState } from "react";

const useWindowSize = () => {
  const [size, setSize] = useState<windowSize>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return size;
};

export default useWindowSize;
