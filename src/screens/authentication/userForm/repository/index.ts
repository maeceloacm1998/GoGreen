import { HttpRemoteAuthentication } from "../../../../services/api/data/usecases/http-remote-authentication";
import { HttpClient } from "../../../../services/api/infra/usecases/http-client";

import { UserFormModel } from "../models/UserFormModel";
import { UserRegisterModel } from "../models/UserRegisterModel";
import { User } from "../../../../context/Authentication";

import { REGISTER_USER_PATH } from "../../../../services/constants";

const httpClient = new HttpRemoteAuthentication(new HttpClient());

export async function createUser(user: UserFormModel): Promise<User> {
  const userModel: UserRegisterModel = {
    ...user,
    date: "2022-11-29T23:53:07.811Z"
  }

  const res = await httpClient.post(REGISTER_USER_PATH, userModel)
  return res.data as User
}