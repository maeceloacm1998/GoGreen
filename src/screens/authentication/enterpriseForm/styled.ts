import styled from 'styled-components/native';

import themes from '../../../themes/themes';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 16px 16px;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-family: ${themes.fonts.jost_medium};
  font-weight: 700;
  margin: 0 10px;
  color: ${themes.color.text_color};
`;

export const Subtitle = styled.Text`
  font-size: 17px;
  font-family: ${themes.fonts.jost_regular};
  font-weight: 500;
  text-align: center;
  margin: 0 12px;
  color: ${themes.color.text_color};
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  margin-top: 15px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${themes.color.primary};
`;

export const TextButton = styled.Text`
  font-size: 18px;
  font-family: ${themes.fonts.roboto_medium};
  font-weight: 600;
  color: ${themes.color.white};
`;

export const GoBackButton = styled.TouchableOpacity`
  width: 100px;
  margin: 16px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const GoBackText = styled.Text`
  font-size: 17px;
  font-family: ${themes.fonts.jost_regular};
  font-weight: 500;
  margin: 0 10px;
  color: ${themes.color.text_color};
`;
