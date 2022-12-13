import {HttpRemoteAuthentication} from '../../../services/api/data/usecases/http-remote-authentication';
import {HttpClient} from '../../../services/api/infra/usecases/http-client';
import {LOGIN_PATH} from '../../../services/constants';

import {AuthenticationResponseModel} from '../models/AuthenticationResponseModel';

const httpClient = new HttpRemoteAuthentication(new HttpClient());

export async function auth(
  email: string,
  password: string,
): Promise<AuthenticationResponseModel> {
  const res = await httpClient.post(LOGIN_PATH, {email, senha: password});
  return res.data;
}
