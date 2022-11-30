import { HttpRemoteAuthentication } from "../../../../services/api/data/usecases/http-remote-authentication";
import { HttpClient } from "../../../../services/api/infra/usecases/http-client";

import { UserFormModel } from "../models/UserFormModel";
import { UserRegisterModel } from "../models/UserRegisterModel";

const httpClient = new HttpRemoteAuthentication(new HttpClient());

export async function createUser(user: UserFormModel): Promise<UserFormModel> {
  const userModel: UserRegisterModel = {
    ...user,
    date: "2022-11-29T23:53:07.811Z"
  }

  // Fazer o post aqui

  return userModel
}