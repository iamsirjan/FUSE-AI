import i18next from "i18next";
import { FuseNavItemType } from "@fuse/core/FuseNavigation/types/FuseNavItemType";
import ar from "./navigation-i18n/ar";
import en from "./navigation-i18n/en";
import tr from "./navigation-i18n/tr";

i18next.addResourceBundle("en", "navigation", en);
i18next.addResourceBundle("tr", "navigation", tr);
i18next.addResourceBundle("ar", "navigation", ar);

/**
 * The navigationConfig object is an array of navigation items for the Fuse application.
 */
const navigationConfig: FuseNavItemType[] = [
  {
    id: "example-component",
    title: "Example helllo",
    translate: "EXAMPLE",
    type: "item",
    icon: "heroicons-outline:star",
    url: "example",
  },
  {
    id: "example-component",
    title: "Example helllo",
    translate: "EXAMPLE",
    type: "item",
    icon: "heroicons-outline:star",
    url: "examplesssssssssssssssss",
  },
];

export default navigationConfig;
