import { User } from "../../../../context/Authentication";
import { HttpRemoteAuthentication } from "../../../../services/api/data/usecases/http-remote-authentication";
import { HttpClient } from "../../../../services/api/infra/usecases/http-client";
import { SCHEDULING_LIST_PATH, SCHEDULING_UPDATE_PATH, SEARCH_USER_PATH } from "../../../../services/constants";
import { ScheduleModel } from "../../../user/SchedulesList/models/ScheduleModel";

const httpClient = new HttpRemoteAuthentication(new HttpClient());

export async function getScheduleItemPerId(scheduleId: string): Promise<ScheduleModel> {
  const request: Array<ScheduleModel> = await httpClient.get(
    SCHEDULING_LIST_PATH,
  );
  return request.find((item) => {return item.id === scheduleId}) || {} as ScheduleModel
}

export async function getClientPerId(clientId: string): Promise<User> {
  const res = await httpClient.get(`${SEARCH_USER_PATH}/${clientId}`)
  return res
}

export async function updateSchedule(body: ScheduleModel) {
  const res = await httpClient.put(`${SCHEDULING_UPDATE_PATH}/${body.id}`, body)
  return res
}