import { ParamListBase, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type ScreenNavigationProp = StackNavigationProp<StackParamsList>;
export type ParamsNavigationProp = ParamListBase;
export interface ScreenProps {
  navigation: ScreenNavigationProp;
  route: RouteProp<ParamsNavigationProp>;
}

export interface StackParamsList {
  InitialRouteUser: any;
  Home: any;
  Schedule: any;
  Profile: any;
  FilterList: any;
  CompanyPreview: any;
  Login: any;
  SelectionRegisterType: any;
  UserForm: any;
  EnterpriseForm: any;
}
