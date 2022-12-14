import { BASE_URL } from './constant';
import { SearchAddressModel } from './models/SearchAddressModel';

export async function searchAddress(cep: string): Promise<SearchAddressModel> {
  const url = `${BASE_URL}${cep}/json`;

  const response = await (await fetch(url)).json();

  return response;
}
