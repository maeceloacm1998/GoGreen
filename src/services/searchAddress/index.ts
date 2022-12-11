import { BASE_URL } from './constant';
import { SearchAddressModel } from './models/SearchAddressModel';

export async function searchAddress(cep: string): Promise<SearchAddressModel> {
  const url = `${BASE_URL}${cep}/json`;

  console.log('REQUEST --->', url);
  return await fetch(url)
    .then(async (result) => await result.json())
    .catch((error) => console.log(error))
    .then((response) => response);
}
