import styled from 'styled-components/native';
import themes from '../../../themes/themes';

export const Container = styled.View`
  padding: 26px 16px;
  flex: 1;
`;

export const ContainerStatus = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 16px 0;
`;

export const Image = styled.Image`
  width: 200px;
  height: 200px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-family: ${themes.fonts.jost_medium};
  font-weight: 700;
  color: ${themes.color.text_color};
`;

export const Tag = styled.Text`
  font-size: 15px;
  font-family: ${themes.fonts.jost_medium};
  font-weight: 700;
  color: ${themes.color.primary};
  margin: 10px 0;
`;

export const SubTitle = styled.Text`
  font-size: 15px;
  font-family: ${themes.fonts.jost_medium};
  font-weight: 700;
  color: ${themes.color.text_color};
  margin: 10px 0;
`;

export const Text = styled.Text`
  font-size: 12px;
  font-family: ${themes.fonts.jost_medium};
  font-weight: 600;
  color: ${themes.color.text_color};
`;

export const StatusContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const StatusText = styled.Text`
  font-size: 13px;
  font-family: ${themes.fonts.jost_regular};
  font-weight: 700;
  color: ${themes.color.text_color};
`;

export const ContainerCancelButton = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  margin-top: 25px;
  background-color: ${themes.color.error};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const ContainerConfirmButton = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  margin-top: 25px;
  background-color: ${themes.color.primary};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const TextButton = styled.Text`
  font-size: 16px;
  font-family: ${themes.fonts.jost_medium};
  font-weight: 700;
  color: ${themes.color.white};
`;
