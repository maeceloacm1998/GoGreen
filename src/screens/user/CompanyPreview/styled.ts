import styled from 'styled-components/native';

import themes from '../../../themes/themes';

export type TitleProps = {
  marginTop: number;
  marginBottom: number;
  marginLeft: number;
  marginRight: number;
}

export type DescriptionProps = {
  marginTop: number;
  marginBottom: number;
  marginLeft: number;
  marginRight: number;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${themes.color.white};
`;

export const ContainerData = styled.ScrollView`
  padding: 16px;
`;

export const Title = styled.Text<TitleProps>`
  font-size: 17px;
  font-family: ${themes.fonts.jost_medium};
  font-weight: 700;
  color: ${themes.color.text_color};
  margin-top: ${props => props.marginTop ? props.marginTop : 0}px;
  margin-bottom: ${props => props.marginBottom ? props.marginBottom : 0}px;
  margin-left: ${props => props.marginLeft ? props.marginLeft : 0}px;
  margin-right: ${props => props.marginRight ? props.marginRight : 0}px;
`;

export const Description = styled.Text<DescriptionProps>`
  font-size: 14px;
  font-family: ${themes.fonts.jost_regular};
  font-weight: 500;
  color: ${themes.color.text_color};
  margin-top: ${props => props.marginTop ? props.marginTop : 0}px;
  margin-bottom: ${props => props.marginBottom ? props.marginBottom : 0}px;
  margin-left: ${props => props.marginLeft ? props.marginLeft : 0}px;
  margin-right: ${props => props.marginRight ? props.marginRight : 0}px;
`;
