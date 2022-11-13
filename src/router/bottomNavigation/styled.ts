import styled from "styled-components/native";

import themes from "../../themes/themes";

export type TextOptionType = {
  focused: boolean
}

export const TextOption = styled.Text<TextOptionType>`
  font-size: 13px;
  font-family: ${themes.fonts.jost_medium};
  font-weight: 700;
  color: ${props => props.focused ? themes.color.primary_dark : themes.color.primary};
`;