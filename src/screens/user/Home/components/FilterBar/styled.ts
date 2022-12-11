import styled from 'styled-components/native';
import themes from '../../../../../themes/themes';

export const FilterContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0;
`;

export const ButtonFilter = styled.TouchableOpacity`
  width: 62px;
  height: 48px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${themes.color.primary};
`;

export const FilterText = styled.Text`
  font-size: 12px;
  font-family: ${themes.fonts.jost_regular};
  font-weight: 500;
  color: ${themes.color.white};
`;
