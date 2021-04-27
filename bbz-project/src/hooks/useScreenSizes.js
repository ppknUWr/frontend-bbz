import useMediaQuery from "@material-ui/core/useMediaQuery";

export const useScreenSizes = () => {
  const large = useMediaQuery("(max-width: 991px)");
  const small = useMediaQuery("(max-width: 575px)");

  return { large, small };
};