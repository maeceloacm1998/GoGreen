import { SafeAreaView } from 'react-native-safe-area-context';

import styled from 'styled-components/native';
import themes from '../../../themes/themes';

export type TextButtonType = {
  color: string
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${themes.color.white};
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

export const Image = styled.Image`
  width: 200px;
  height: 200px;
`;

export const ButtonDefault = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  margin: 10px 0;
  background-color: ${themes.color.primary};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const ButtonWithBorder = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: ${themes.color.white};
  justify-content: center;
  align-items: center;
  border: 2px solid ${themes.color.primary};
  border-radius: 10px;
`;

export const TextButton = styled.Text<TextButtonType>`
  font-size: 16px;
  font-family: ${themes.fonts.jost_medium};
  font-weight: 700;
  color: ${props => props.color ? props.color : themes.color.text_color};
`;