import styled from 'styled-components/native';
import themes from '../../themes/themes';

export interface ContainerCard {
  marginTop: number;
  marginBottom: number;
  marginLeft: number;
  marginRight: number;
}

export const CardContainer = styled.TouchableOpacity<ContainerCard>`
  background-color: ${themes.color.white};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px;
  border-radius: 10px;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : 0)}px;
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : 0)}px;
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : 0)}px;
  margin-right: ${(props) => (props.marginRight ? props.marginRight : 0)}px;
`;

export const ImageCustom = styled.Image`
  width: 65px;
  height: 65px;
  border-radius: 20px;
  margin-right: 12px;
`;

export const Container = styled.View`
  flex-direction: row;
`;
export const ContainerData = styled.View``;

export const TitleText = styled.Text`
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
