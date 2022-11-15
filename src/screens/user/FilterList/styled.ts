import styled from "styled-components/native";
import themes from "../../../themes/themes";

export const Container = styled.View`
  flex: 1;
  padding: 16px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-family: ${themes.fonts.jost_medium};
  font-weight: 600;
  color: ${themes.color.primary};
  margin-bottom: 10px;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 19px;
  background-color: ${themes.color.primary};
`;

export const TextButton = styled.Text`
  font-size: 18px;
  font-family: ${themes.fonts.roboto_medium};
  font-weight: 600;
  color: ${themes.color.white};
`;