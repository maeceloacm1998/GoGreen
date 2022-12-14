import { ScheduleFormFieldValues } from '..';
import { states } from '../../../../components/CardWithState';
import { HttpRemoteAuthentication } from '../../../../services/api/data/usecases/http-remote-authentication';
import { HttpClient } from '../../../../services/api/infra/usecases/http-client';
import { REGISTER_SCHEDULE_PATH } from '../../../../services/constants';

const httpClient = new HttpRemoteAuthentication(new HttpClient());

interface Schedule extends ScheduleFormFieldValues {
  idUsuario: string;
  idCompany: string;
}

export async function createSchedule(schedule: Schedule): Promise<Schedule> {
  const scheduleModel = {
    ...schedule,
    statusScheduling: states.inProgress,
    dtCreated: new Date().toJSON()
  };

  const res = await httpClient.post(REGISTER_SCHEDULE_PATH, scheduleModel);

  return res?.data as Schedule;
}
