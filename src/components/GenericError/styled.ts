import styled from 'styled-components/native';
import themes from '../../themes/themes';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  width: 170px;
  height: 170px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-family: ${themes.fonts.jost_bold};
  font-weight: bold;
  color: ${themes.color.text_color};
  margin-top: 20px;
  margin-bottom: 16px;
`;

export const Description = styled.Text`
  font-size: 18px;
  font-family: ${themes.fonts.jost_regular};
  font-weight: 500;
  text-align: center;
  color: ${themes.color.text_color};
`;
