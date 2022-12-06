import styled from 'styled-components/native';

import themes from '../../../themes/themes';

export const Container = styled.View`
  flex: 1;
  padding: 16px;
`;

export const HeaderText = styled.View`
  width: 100%;
  padding: 16px 0;
`;

export const TitleLight = styled.Text`
  font-size: 17px;
  font-family: ${themes.fonts.jost_regular};
  font-weight: 500;
  color: ${themes.color.text_color};
`;

export const TitleDark = styled.Text`
  font-size: 17px;
  font-family: ${themes.fonts.jost_medium};
  font-weight: 700;
  color: ${themes.color.primary_dark};
`;