import { LoginState } from "./auth/login/loginSlice";
import { LayoutState } from "./layout/interface";

export interface StoreInterface {
  Layout: LayoutState;
  Login: LoginState;
}

export type RootState = {
  Layout: StoreInterface["Layout"];
  Login: StoreInterface["Login"];
};
