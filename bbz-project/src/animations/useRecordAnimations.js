import { useSpring } from "react-spring";

export const useRecordAnimations = (open, setVisibility, height) => {
  const heightBasic = 0;
  const heightExpanded = height;
  const marginBasic = 0;
  const marginExpanded = height - 24;
  const sublistConfig = {
    duration: 200,
  };
  const recordConfig = {
    duration: 100,
  };

  const sublistAnimation = useSpring(
    open
      ? {
          from: { height: heightBasic, opacity: 0 },
          to: { height: heightExpanded, opacity: 1 },
          config: sublistConfig,
          onRest() {
            setVisibility(true);
          },
        }
      : {
          from: { height: heightExpanded, opacity: 1 },
          to: { height: heightBasic, opacity: 0 },
          config: sublistConfig,
          onRest() {
            setVisibility(false);
          },
        }
  );

  const marginAnimation = useSpring(
    open
      ? {
          from: { marginBottom: marginBasic },
          to: { marginBottom: marginExpanded },
          config: recordConfig,
        }
      : {
          from: { marginBottom: marginExpanded },
          to: { marginBottom: marginBasic },
          config: recordConfig,
        }
  );

  return { sublistAnimation, marginAnimation };
};
