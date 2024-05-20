import { TABS, TabOption } from "@/redux/layout/interface";

type VariableColors =
  | "success"
  | "muted"
  | "primary"
  | "secondary"
  | "warning"
  | "info"
  | "danger";

export interface StatWidgetInterface {
  label: string;
  badgeClass: VariableColors;
  badgeIconClass: string;
  percentage: string;
  counterStart: number;
  counterEnd: number;
  prefix: string;
  suffix: string;
  duration: number;
  decimal: string;
  decimals: number;
  seperator: string;
  linkType: "page" | "section";
  link: string;
  linkUrl: TabOption;
  widgetIconBg:
    | "success-bg"
    | "muted-bg"
    | "primary-bg"
    | "secondary-bg"
    | "warning-bg"
    | "info-bg"
    | "danger-bg";
  widgetIconClass: string;
  widgetIconColor: VariableColors;
}

const staffAnalytics: StatWidgetInterface[] = [
  {
    label: "Jobs",
    badgeClass: "info",
    badgeIconClass: "fi fi-rr-arrow-small-right -rotate-45",
    percentage: "+40.56",
    counterStart: 0,
    counterEnd: 9,
    prefix: "",
    suffix: "",
    duration: 4,
    decimal: ".",
    decimals: 0,
    seperator: ",",
    linkType: "section",
    link: "See details",
    // linkUrl: "/question",
    linkUrl: TABS.JOBS,
    widgetIconBg: "info-bg",
    widgetIconClass: "fi fi-rr-umbrella-beach",
    widgetIconColor: "info",
  },
  {
    label: "BlogInterface",
    badgeClass: "success",
    badgeIconClass: "fi fi-rr-arrow-small-right -rotate-45",
    percentage: "+23.48",
    counterStart: 0,
    counterEnd: 24,
    prefix: "",
    // suffix: "K",
    suffix: "",
    duration: 4,
    decimal: ".",
    seperator: ",",
    // decimals: 2,
    decimals: 0,
    linkType: "section",
    link: "See details",
    // linkUrl: "#users-sections",
    linkUrl: TABS.BlogInterface,
    widgetIconBg: "success-bg",
    widgetIconClass: "fi fi-rr-radio",
    widgetIconColor: "success",
  },
];

export default staffAnalytics;
