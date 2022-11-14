import styled from "styled-components/native";
import themes from "../../themes/themes";

export type TextInputCustomType = {
  marginTop: number;
  marginBottom: number;
  marginLeft: number;
  marginRight: number;
}

export const Container = styled.View<TextInputCustomType>`
  height: 48px;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
  padding: 0 18px;
  color: ${themes.color.text_color};
  background-color: ${themes.color.primary_light_low};
  margin-top: ${props => props.marginTop ? props.marginTop : 0}px;
  margin-bottom: ${props => props.marginBottom ? props.marginBottom : 0}px;
  margin-left: ${props => props.marginLeft ? props.marginLeft : 0}px;
  margin-right: ${props => props.marginRight ? props.marginRight : 0}px;
`;

export const TextInputCustom = styled.TextInput<TextInputCustomType>`
  margin-left: 10px;
`;