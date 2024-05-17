import { TABS } from "@/redux/layout/interface";

export interface MenuItem {
  title: string;
  icon: string;
  tooltip: string;
  tabName: TABS.ANALYTICS | TABS.HOLIDAY | TABS.JOBS | TABS.NEWS;
}

const menuItems: MenuItem[] = [
  {
    title: "Dashboard",
    icon: "fi fi-sr-apps-add",
    tooltip: "Home Section",
    tabName: TABS.ANALYTICS,
  },
  {
    title: "Holiday",
    icon: "fi fi-sr-umbrella-beach",
    tooltip: "Holiday Section",
    tabName: TABS.HOLIDAY,
  },
  {
    title: "Jobs",
    icon: "fi fi-sr-briefcase",
    tooltip: "Job Section",
    tabName: TABS.JOBS,
  },
  {
    title: "News",
    icon: "fi fi-sr-radio",
    tooltip: "News Section",
    tabName: TABS.NEWS,
  },
];

export default menuItems;
