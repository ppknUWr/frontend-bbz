import { useSpring } from "react-spring";

export const useRecordAnimations = (open, setVisibility, height) => {
  const heightBasic = 45;
  const heightExpanded = height;
  const sublistInvisible = { height: heightBasic };
  const sublistVisible = { height: heightExpanded };
  const config = {
    mass: 1,
    tension: 200,
    friction: 25,
  };

  const heightAnim = useSpring(
    open
      ? {
          from: sublistInvisible,
          to: sublistVisible,
          config: config,
          onRest() {},
        }
      : {
          from: sublistVisible,
          to: sublistInvisible,
          config: config,
          onRest() {
            setVisibility(false);
          },
        }
  );

  const sublistAnim = useSpring(
    open
      ? {
          from: { opacity: 0 },
          to: { opacity: 1 },
          config: config,
        }
      : {
          from: { opacity: 1 },
          to: { opacity: 0 },
          config: config,
        }
  );

  return { heightAnim, sublistAnim };
};
