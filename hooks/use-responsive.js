import { useMemo } from "react";
import useWindowSize from "./use-window-size";

const useResponsive = () => {
  const { width: deviceWidth, height: deviceHeight } = useWindowSize();

  const isMobile = useMemo(() => deviceWidth < 768, [deviceWidth]);

  const isDesktop = useMemo(() => deviceWidth >= 768, [deviceWidth]);

  return {
    deviceWidth,
    deviceHeight,
    isMobile,
    isDesktop
  };
};

export default useResponsive;
