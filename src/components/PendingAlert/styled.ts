import styled from "styled-components/native";
import themes from "../../themes/themes";

export type ContainerType = {
  marginTop: number;
  marginBottom: number;
  marginLeft: number;
  marginRight: number;
}

export const Container = styled.Pressable<ContainerType>`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px;
  border-radius: 10px;
  background-color: ${themes.color.background_card_color};
  margin-top: ${props => props.marginTop ? props.marginTop : 0}px;
  margin-bottom: ${props => props.marginBottom ? props.marginBottom : 0}px;
  margin-left: ${props => props.marginLeft ? props.marginLeft : 0}px;
  margin-right: ${props => props.marginRight ? props.marginRight : 0}px;
`;

export const InformationContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Information = styled.View``;

export const Image = styled.Image`
  width: 65px;
  height: 65px;
  border-radius: 20px;
  margin-right: 11px;
  justify-content: center;
  align-items: center;
  background-color: ${themes.color.primary};
`;

export const Title = styled.Text`
  font-size: 16px;
  font-family: ${themes.fonts.jost_medium};
  font-weight: 700;
  color: ${themes.color.text_color};
`;

export const AddressText = styled.Text`
  font-size: 14px;
  font-family: ${themes.fonts.jost_regular};
  color: ${themes.color.text_color};
`;

export const CategoryText = styled.Text`
  font-size: 14px;
  font-family: ${themes.fonts.jost_bold};
  font-weight: bold;
  color: ${themes.color.primary_dark};
`;

export const StatusContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Status = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 100px;
  background-color: ${themes.color.primary};
`;

export const StatusText = styled.Text`
  font-size: 13px;
  font-family: ${themes.fonts.jost_regular};
  font-weight: 700;
  color: ${themes.color.text_color};
`;