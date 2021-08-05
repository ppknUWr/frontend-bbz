import { useMediaQuery } from "@material-ui/core";

export const useScreenSizes = () => {
  const large = useMediaQuery("(max-width: 991px)");

  return { large };
};