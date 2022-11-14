import styled from "styled-components/native";
import themes from "../../../../../themes/themes";

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const UserNameLight = styled.Text`
  font-size: 32px;
  font-family: ${themes.fonts.jost_regular};
  font-weight: 500;
  color: ${themes.color.text_color};
`;

export const UserNameDark = styled.Text`
  font-size: 32px;
  font-family: ${themes.fonts.jost_medium};
  font-weight: 700;
  color: ${themes.color.text_color};
`;
export const ImageIcon = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 100px;
`;