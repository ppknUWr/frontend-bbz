import { useMediaQuery } from "@material-ui/core";

export const useScreenSizes = () => {
  const large = useMediaQuery("(max-width: 991px)");
  const topBarIconBreakpoint = useMediaQuery("(max-width: 1038px)");

  return { large, topBarIconBreakpoint };
};