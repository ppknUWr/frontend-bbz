import { useSpring } from "react-spring";

export const useRecordAnimations = (open, setVisibility) => {
  const sublistAnimation = useSpring(
    open
      ? {
          from: { height: 0 },
          to: { height: 125 },
          config: {
            duration: 200,
          },
          onRest() {
            setVisibility(true);
          },
        }
      : {
          from: { height: 125 },
          to: { height: 0 },
          config: {
            duration: 200,
          },
          onRest() {
            setVisibility(false);
          },
        }
  );

  const marginAnimation = useSpring(
    open
      ? {
          from: { marginBottom: 0 },
          to: { marginBottom: 120 },
          config: {
            duration: 100,
          },
        }
      : {
          from: { marginBottom: 120 },
          to: { marginBottom: 0 },
          config: {
            duration: 100,
          },
        }
  );

  return { sublistAnimation, marginAnimation };
};
