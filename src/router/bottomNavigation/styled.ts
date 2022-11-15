import styled from 'styled-components/native';

import themes from '../../themes/themes';

export type TextOptionType = {
  focused: boolean;
  color: string;
};

export type ContainerIcon = {
  color?: string;
};

export const TextOption = styled.Text<TextOptionType>`
  font-size: 13px;
  font-family: ${themes.fonts.jost_medium};
  font-weight: 700;
  color: ${props =>
    props.focused ? themes.color.primary_dark : themes.color.primary};
  color: ${props => props.color};
`;

export const ContainerIcon = styled.View<ContainerIcon>`
  margin-bottom: -15px;
  width: 90%;
  height: 60px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.color ? props.color : '#FFFFFF')};
`;
