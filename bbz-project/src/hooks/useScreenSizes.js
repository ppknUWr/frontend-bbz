import { useMediaQuery } from "@material-ui/core";

export const useScreenSizes = () => {
  const large = useMediaQuery("(max-width: 991px)");
  const firstKeyBreakpoint = useMediaQuery("(max-width: 1300px)");
  const topBarIconBreakpoint = useMediaQuery("(max-width: 1038px)");

  return { large, firstKeyBreakpoint, topBarIconBreakpoint };
};