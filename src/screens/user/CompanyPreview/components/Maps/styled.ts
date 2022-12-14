import MapView from 'react-native-maps';
import styled from 'styled-components/native';
import themes from '../../../../../themes/themes';

export const Container = styled.View`
  height: 300px;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${themes.color.background_card_color};
  margin-bottom: 30px;
`;

export const MapsView = styled(MapView)`
  height: 300px;
  width: 100%;
`;
