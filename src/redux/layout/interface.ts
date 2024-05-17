export enum TABS {
  ANALYTICS = "pills-analytics",
  HOLIDAY = "pills-holiday",
  JOBS = "pills-jobs",
  NEWS = "pills-news",
}

export type TabOption = TABS.ANALYTICS | TABS.HOLIDAY | TABS.JOBS | TABS.NEWS;

export interface LayoutState {
  activeTab: TabOption;
}
