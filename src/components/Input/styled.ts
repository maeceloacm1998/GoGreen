import styled from 'styled-components/native';
import themes from '../../themes/themes';

export interface TextInputCustomType {
  marginTop: number;
  marginBottom: number;
  marginLeft: number;
  marginRight: number;
}

export const TextInputCustom = styled.TextInput<TextInputCustomType>`
  height: 48px;
  width: 100%;
  border-radius: 5px;
  padding: 0 16px;
  color: ${themes.color.text_color};
  background-color: ${themes.color.primary_light_low};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : 0)}px;
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : 0)}px;
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : 0)}px;
  margin-right: ${(props) => (props.marginRight ? props.marginRight : 0)}px;
`;
