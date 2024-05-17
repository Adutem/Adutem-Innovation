export interface Admin {
  _id: string;
  userId: string;
  email: string;
  password: string;
  isLoggedIn: boolean;
  loginAttempts: number;
  isVerified: boolean;
}
