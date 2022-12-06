import { Company } from "../../../../context/Authentication";
import { HttpRemoteAuthentication } from "../../../../services/api/data/usecases/http-remote-authentication";
import { HttpClient } from "../../../../services/api/infra/usecases/http-client";
import { REGISTER_COMPANY_PATH } from "../../../../services/constants";

import { EnterpriseFormModel } from "../models/EnterpriseFormModel";
import { EnterpriseRegisterModel } from "../models/EnterpriseRegisterModel";

const httpClient = new HttpRemoteAuthentication(new HttpClient());

export async function createUser(user: EnterpriseFormModel, category: string): Promise<Company> {
  const userModel: EnterpriseRegisterModel = {
    ...user,
    category,
    imageUrl: "",
    date: "2022-11-29T23:53:07.811Z"
  }
  
  const res = await httpClient.post(REGISTER_COMPANY_PATH, userModel)
  return res.data as Company
}