import {HttpRemoteAuthentication} from '../../../../services/api/data/usecases/http-remote-authentication';
import {HttpClient} from '../../../../services/api/infra/usecases/http-client';

const httpClient = new HttpRemoteAuthentication(new HttpClient());

export async function getCategoryList(): Promise<Array<string>> {
  const req = await httpClient.get('e03566fe-1ba0-4cf8-8d1e-2e24d28385d8');
  return req.body;
}
