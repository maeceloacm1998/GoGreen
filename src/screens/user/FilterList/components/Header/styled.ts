import styled from "styled-components/native";
import themes from "../../../../../themes/themes";

export type TitleProps = {
  color?: string;
}

export const HeaderContainer = styled.View`
  width: 100%;
  margin-top: 16px;
  padding: 0 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.Text<TitleProps>`
  font-size: 16px;
  font-family: ${themes.fonts.roboto_regular};
  font-weight: 500;
  color: ${props => props.color ? props.color : themes.color.text_color};
`;

export const ClearButton = styled.TouchableOpacity``;

export const Divider = styled.View`
  width: 100%;
  height: 3px;
  background-color: ${themes.color.divider_color};
  margin: 16px 0;
`;