import styled from 'styled-components/native';

import themes from '../../../../../themes/themes';

export const CardOptionS = styled.TouchableOpacity`
  width: 130px;
  height: 190px;
  margin: 0 10px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: ${themes.color.background_card_option_color};
`;

export const CardImage = styled.Image`
  width: 131px;
  height: 100px;
`;

export const CardTitle = styled.Text`
  font-size: 16px;
  font-family: ${themes.fonts.jost_medium};
  font-weight: 700;
  color: ${themes.color.text_color};
`;
