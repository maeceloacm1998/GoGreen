import styled from 'styled-components/native';
import themes from '../../themes/themes';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  margin-top: 16px;
  font-size: 16px;
  font-family: ${themes.fonts.jost_medium};
  font-weight: 700;
  color: ${themes.color.primary};
`;
