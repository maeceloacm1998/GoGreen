import styled from 'styled-components/native';
import themes from '../../../themes/themes';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 16px;
  background-color: ${themes.color.white};
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
  margin: 0 10px;
  color: ${themes.color.text_color};
  margin-bottom: 30px;
`;

export const ContainerOptions = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const GoBackButton = styled.TouchableOpacity`
  width: 100px;
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
