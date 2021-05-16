import { useSpring } from "react-spring";

export const useSidebarAnimations = (open, closeBlackBck) => {
  const hidePosition = -350;
  const showPosition = 0;
  const config = {
    duration: 300
  };

  const slideSidebar = useSpring(
    open
      ? {
          from: { left: hidePosition },
          to: { left: showPosition },
          config: config,
          onRest() {}
        }
      : {
          from: { left: showPosition },
          to: { left: hidePosition },
          config: config,
          onRest() {
            closeBlackBck();
          }
        }
  );

  return { slideSidebar };
};
