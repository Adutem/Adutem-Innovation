import { AnalyticsState } from "./analytics/analyticsSlice";
import { LoginState } from "./auth/login/loginSlice";
import { HolidayState } from "./holiday/interface";
import { JobState } from "./job/interface";
import { LayoutState } from "./layout/interface";

export interface StoreInterface {
  Layout: LayoutState;
  Login: LoginState;
  Analytics: AnalyticsState;
  Holiday: HolidayState;
  Jobs: JobState;
}

export type RootState = {
  Layout: StoreInterface["Layout"];
  Login: StoreInterface["Login"];
  Analytics: StoreInterface["Analytics"];
  Holiday: StoreInterface["Holiday"];
  Jobs: StoreInterface["Jobs"];
};
