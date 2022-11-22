import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Marker} from 'react-native-maps';

import Pointer from '../../../../../assets/images/pointMap.png';
import themes from '../../../../../themes/themes';
import {Container, MapsView} from './styled';

export interface MapsProps {
  loading: boolean;
  latitude: number;
  longitude: number;
}

const checkProps = (props: MapsProps) => ({
  loading: props.loading ? props.loading : false,
  latitude: props.latitude ? props.latitude : -19.8348311,
  longitude: props.longitude ? props.longitude : -43.9827723,
});

const Maps = (props: MapsProps) => {
  const {loading, latitude, longitude} = checkProps(props);
  return (
    <Container>
      {loading ? (
        <ActivityIndicator size="large" color={themes.color.primary} />
      ) : (
        <MapsView
          initialRegion={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.002,
            longitudeDelta: 0.002,
          }}>
          <Marker
            coordinate={{latitude: latitude, longitude: longitude}}
            image={Pointer}
          />
        </MapsView>
      )}
    </Container>
  );
};

export default Maps;
