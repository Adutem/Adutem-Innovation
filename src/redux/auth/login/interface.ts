import { ApiResponse, Admin } from "@/interfaces";

export interface LoginData {
  email: string;
  password: string;
}

export interface LoginUserResponse extends ApiResponse {
  user: Admin;
  accessToken: string;
}

export interface LogoutUserResponse extends ApiResponse {}
