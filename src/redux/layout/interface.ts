export enum TABS {
  ANALYTICS = "pills-analytics",
  HOLIDAY = "pills-holiday",
  JOBS = "pills-jobs",
  BLOG = "pills-blog",
}

export type TabOption = TABS.ANALYTICS | TABS.HOLIDAY | TABS.JOBS | TABS.BLOG;

export interface LayoutState {
  activeTab: TabOption;
}
