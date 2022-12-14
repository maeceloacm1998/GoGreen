// LINK DOCUMENTACAO API https://nominatim.org/release-docs/develop/api/Search/

import { BASE_URL, SEPARATOR_SPACE } from './constants';

import { LatLongModel } from './models/LatLongModel';
import { FeaturesItem, LatLongResponseModel } from './models/LatLongResponseModel';

export async function fetchLatLongWithAddress(address: string): Promise<LatLongResponseModel> {
  const addressResult = convertAddress(address);
  const url = `${BASE_URL}q=${addressResult}+Brazil&format=geojson`;

  return await fetch(url)
    // eslint-disable-next-line @typescript-eslint/promise-function-async
    .then((result) => result.json())
    .then((response) => response);
}

function convertAddress(address: string): string {
  let addressResult = '';
  // eslint-disable-next-line array-callback-return
  address.split(SEPARATOR_SPACE).map((item) => {
    if (!isEmpty(address)) {
      addressResult = addressResult + `+${item}`;
    }
  });
  return addressResult;
}

export function getLatLong(address: string, res: LatLongResponseModel): LatLongModel {
  const latLong = {} as LatLongModel;

  const features = filterAddress(address, res);
  features.map((item) => {
    const latitude = item.geometry.coordinates[1];
    const longitude = item.geometry.coordinates[0];
    return {
      latitude,
      longitude
    };
  });

  return latLong;
}

function filterAddress(address: string, res: LatLongResponseModel): FeaturesItem[] {
  return res.features.filter((item) =>
    item.properties.display_name.toLowerCase().match(address.toLowerCase())
  );
}

function isEmpty(str: string) {
  return str.length === 0;
}
