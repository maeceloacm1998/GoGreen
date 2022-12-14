import styled, { css } from 'styled-components/native';
import themes from '../../../themes/themes';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false
})`
  display: flex;
  flex: 1;
  background: ${themes.color.background_card_color};
`;

export const Header = styled.View`
  display: flex;
  align-items: flex-start;
  padding: 20px;
  justify-content: center;
  background: #e5e5e5;
`;

export const GoBackIcon = styled(Icon).attrs({
  size: 18,
  name: 'arrow-back-ios'
})`
  color: #52665a;
`;

export const GoBackButton = styled(TouchableOpacity).attrs({
  activeOpacity: 0.7
})``;

export const Content = styled.View`
  display: flex;
  align-items: center;
  padding: 10px;
`;

export const Title = styled.Text`
  color: ${themes.color.text_color};
  font-family: ${themes.fonts.roboto_regular};
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  margin-bottom: 16px;
`;

export const Subtitle = styled.Text`
  color: ${themes.color.black};
  font-family: ${themes.fonts.roboto_regular};
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 32px;
`;

export const Form = styled.View`
  width: 100%;
`;

export interface ButtonProps {
  type?: 'primary' | 'secondary';
  disabled?: boolean;
}

export const Button = styled.TouchableOpacity<ButtonProps>`
  width: 100%;
  height: 50px;
  margin-bottom: 16px;
  background-color: ${({ type }) => (type === 'secondary' ? 'transparent' : themes.color.primary)};
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
    `};

  border: 1px solid ${themes.color.primary};
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export const TextButton = styled.Text<ButtonProps>`
  font-size: 16px;
  font-family: ${themes.fonts.jost_medium};
  font-weight: 700;
  color: ${({ type }) => (type === 'secondary' ? themes.color.primary : themes.color.white)};
`;
