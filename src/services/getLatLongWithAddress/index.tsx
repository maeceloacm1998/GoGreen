// LINK DOCUMENTACAO API https://nominatim.org/release-docs/develop/api/Search/

import {BASE_URL, SEPARATOR_SPACE} from './constants';

import {LatLongModel} from './models/LatLongModel';
import {
  FeaturesItem,
  LatLongResponseModel,
} from './models/LatLongResponseModel';

export async function fetchLatLongWithAddress(
  address: string,
  number: number,
): Promise<LatLongResponseModel> {
  const addressResult = convertAddress(address);
  const url = `${BASE_URL}q=${number}+${addressResult}+Brazil&format=geojson`;

  console.log('REQUEST --->', url);
  return await fetch(url)
    .then(result => result.json())
    .then(response => response);
}

function convertAddress(address: string): string {
  let addressResult = '';
  address.split(SEPARATOR_SPACE).map(item => {
    if (!isEmpty(address)) {
      addressResult = addressResult + `+${item}`;
    }
  });
  return addressResult;
}

export function getLatLong(
  address: string,
  res: LatLongResponseModel,
): LatLongModel {
  let latLong = {} as LatLongModel;

  const features = filterAddress(address, res);
  features.map(item => {
    const latitude = item.geometry.coordinates[1];
    const longitude = item.geometry.coordinates[0];
    return {
      latitude,
      longitude,
    };
  });

  return latLong;
}

function filterAddress(
  address: string,
  res: LatLongResponseModel,
): Array<FeaturesItem> {
  return res.features.filter(item =>
    item.properties.display_name.toLowerCase().match(address.toLowerCase()),
  );
}

function isEmpty(str: string) {
  return str.length == 0;
}