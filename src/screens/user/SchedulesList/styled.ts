import styled from 'styled-components/native';
import themes from '../../../themes/themes';

export const Container = styled.View`
  flex: 1;
  padding: 16px;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-family: ${themes.fonts.jost_medium};
  font-weight: 700;
  color: ${themes.color.text_color};
`;

export const Subtitle = styled.Text`
  width: 80%;
  font-size: 17px;
  font-family: ${themes.fonts.jost_regular};
  font-weight: 500;
  color: ${themes.color.text_color};
  margin-bottom: 30px;
`;
