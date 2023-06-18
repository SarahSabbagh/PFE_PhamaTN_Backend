import React from "react";
import { ISideBarMenuList } from "../core/constants/list/sideBarMenuList";
import { useTranslation } from "react-i18next";

export const useAppropriateMenu = (
  MenuList: ISideBarMenuList[]
): ISideBarMenuList[] => {
  const { t } = useTranslation();

  const translatedMenuList = MenuList.map((el) => ({
    ...el,
    title: t(el.title),
    subMenu: el.subMenu?.map((item) => ({
      ...item,
      title: t(item.title),
    })),
  }));

  return translatedMenuList;
};
