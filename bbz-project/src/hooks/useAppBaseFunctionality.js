import * as React from "react";
import { useEffect } from "react";
import { useScreenSizes } from "./useScreenSizes";

export const useAppBaseFunctionality = () => {
  const { large } = useScreenSizes();

  const [openSidebar, setOpenSidebar] = React.useState(false);
  const [blackBckVisibility, setBlackBckVisibility] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);

  useEffect(() => {
    if (!large) {
      setOpenSidebar(false);
      setBlackBckVisibility(false);
    }
  }, [large]);

  const onOpenSidebar = () => {
    setOpenSidebar(true);
    setBlackBckVisibility(true);
  };

  const closeSidebar = () => {
    setOpenSidebar(false);
  };

  const closeBlackBck = () => {
    setBlackBckVisibility(false);
  };

  const onOpenModal = () => {
    setOpenModal(true);
  };

  const onCloseModal = () => {
    setOpenModal(false);
  };

  return {
    openSidebar,
    blackBckVisibility,
    openModal,
    onOpenSidebar,
    closeSidebar,
    closeBlackBck,
    onOpenModal,
    onCloseModal,
  };
};
