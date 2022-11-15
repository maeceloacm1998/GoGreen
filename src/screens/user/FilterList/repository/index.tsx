import {HttpRemoteAuthentication} from '../../../../services/api/data/usecases/http-remote-authentication';
import {HttpClient} from '../../../../services/api/infra/usecases/http-client';
import {CATEGORY_LIST_PATH} from '../../../../services/constants';

const httpClient = new HttpRemoteAuthentication(new HttpClient());

export async function getCategoryList(): Promise<Array<string>> {
  const req = await httpClient.get(CATEGORY_LIST_PATH);
  return req.body;
}
