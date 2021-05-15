import { useSpring } from "react-spring";

export const useSidebarAnimations = (open, closeBlackBck) => {
  const config = {
    duration: 300
  };

  const slideSidebar = useSpring(
    open
      ? {
          from: { left: "-100%" },
          to: { left: "0%" },
          config: config,
          onRest() {}
        }
      : {
          from: { left: "0%" },
          to: { left: "-100%" },
          config: config,
          onRest() {
            closeBlackBck();
          }
        }
  );

  return { slideSidebar };
};
