import { useMediaQuery } from "@material-ui/core";

export const useScreenSizes = () => {
  const firstKeyBreakpoint = useMediaQuery("(max-width: 1300px)");

  return { firstKeyBreakpoint };
};