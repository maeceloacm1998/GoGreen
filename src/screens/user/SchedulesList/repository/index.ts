import {HttpRemoteAuthentication} from '../../../../services/api/data/usecases/http-remote-authentication';
import {HttpClient} from '../../../../services/api/infra/usecases/http-client';
import {SCHEDULING_LIST_PATH} from '../../../../services/constants';

import {ScheduleModel} from '../models/ScheduleModel';

const httpClient = new HttpRemoteAuthentication(new HttpClient());

export async function fetchSchedule(): Promise<Array<ScheduleModel>> {
  const request = await httpClient.get(SCHEDULING_LIST_PATH);
  return request;
}
