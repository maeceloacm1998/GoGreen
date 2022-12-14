import styled from 'styled-components/native';
import themes from '../../themes/themes';

export interface TextInputCustomType {
  marginTop: number;
  marginBottom: number;
  marginLeft: number;
  marginRight: number;
}

export const Container = styled.View<TextInputCustomType>`
  width: 100%;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : 0)}px;
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : 0)}px;
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : 0)}px;
  margin-right: ${(props) => (props.marginRight ? props.marginRight : 0)}px;
`;

export const TextInputCustom = styled.TextInput`
  height: 48px;
  width: 100%;
  border-radius: 5px;
  padding: 0 16px;
  color: ${themes.color.text_color};
  background-color: ${themes.color.primary_light_low};
`;

export const ErrorContainer = styled.View`
  width: 100%;
`;

export const ErrorText = styled.Text`
  font-size: 12px;
  font-family: ${themes.fonts.jost_regular};
  font-weight: 500;
  color: ${themes.color.error};
`;
