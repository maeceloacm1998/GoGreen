import styled from "styled-components/native";
import themes from "../../../../../themes/themes";

export const Header = styled.View`
  padding: 30px 25px;
  background-color: ${themes.color.background_card_color};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const ImageCustom = styled.Image`
  height: 65px;
  border-radius: 20px;
  margin-right: 12px;
`;

export const Container = styled.View`
  flex-direction: row;
  margin-top: 30px;
`;
export const ContainerData = styled.View``;

export const TitleText = styled.Text`
  font-size: 16px;
  font-family: ${themes.fonts.jost_medium};
  font-weight: 700;
  color: ${themes.color.text_color};
`;

export const AddressText = styled.Text`
  font-size: 14px;
  font-family: ${themes.fonts.jost_regular};
  color: ${themes.color.text_color};
`;

export const CategoryText = styled.Text`
  font-size: 14px;
  font-family: ${themes.fonts.jost_bold};
  font-weight: bold;
  color: ${themes.color.primary_dark};
`;

export const RegisterCollectButton = styled.TouchableOpacity`
  width: 140px;
  height: 35px;
  border-radius: 10px;
  margin-top: 15px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: ${themes.color.primary};
`;

export const RegisterCollectText = styled.Text`
  font-size: 14px;
  font-family: ${themes.fonts.jost_medium};
  font-weight: 600;
  color: ${themes.color.white};
  margin-right: 10px;
`;