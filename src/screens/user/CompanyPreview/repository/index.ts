import { CompaniesListModel } from "../../../../models/CompaniesListModel";
import { HttpRemoteAuthentication } from "../../../../services/api/data/usecases/http-remote-authentication";
import { HttpClient } from "../../../../services/api/infra/usecases/http-client";
import { SEARCH_COMPANIES_PATH } from "../../../../services/constants";

const httpClient = new HttpRemoteAuthentication(new HttpClient());

export async function fetchCompanyById(id: string) : Promise<CompaniesListModel>{
  const res = await httpClient.get(`${SEARCH_COMPANIES_PATH}/${id}`)
  return res
}