import { Company, User } from "..";

export interface AuthenticationResponseModel {
  userType: string,
  user: User | Company
}