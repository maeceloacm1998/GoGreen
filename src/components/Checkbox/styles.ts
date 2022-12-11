import styled from 'styled-components/native';
import themes from '../../themes/themes';

export interface ContainerCheckbox {
  marginTop: number;
  marginBottom: number;
  marginLeft: number;
  marginRight: number;
}

export const Container = styled.View<ContainerCheckbox>`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : 0)}px;
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : 0)}px;
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : 0)}px;
  margin-right: ${(props) => (props.marginRight ? props.marginRight : 0)}px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-family: ${themes.fonts.roboto_regular};
  color: ${themes.color.text_color};
`;
