import { ParamListBase } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type ScreenNavigationProp = StackNavigationProp<StackParamsList>;
export type ParamsNavigationProp = ParamListBase;
export type ScreenProps = {
  navigation: ScreenNavigationProp;
};

export type StackParamsList = {
  Home: any;
  Schedule: any;
  Profile: any;
};