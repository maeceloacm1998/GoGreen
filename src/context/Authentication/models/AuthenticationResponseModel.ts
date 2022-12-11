import { Company, User } from '..';

export interface AuthenticationResponseModel {
  userType: string;
  data: User | Company;
}
