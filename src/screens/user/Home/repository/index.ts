import { CompaniesListModel } from '../../../../models/CompaniesListModel';
import {HttpRemoteAuthentication} from '../../../../services/api/data/usecases/http-remote-authentication';
import {HttpClient} from '../../../../services/api/infra/usecases/http-client';

import { COMPANIES_LIST_PATH } from '../../../../services/constants';

const httpClient = new HttpRemoteAuthentication(new HttpClient());

export async function getCompaniesList(): Promise<Array<CompaniesListModel>> {
  const request = await httpClient.get(COMPANIES_LIST_PATH)
  return request.body
}
