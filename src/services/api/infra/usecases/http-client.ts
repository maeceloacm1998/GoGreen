import axios, {AxiosResponse} from "axios";
import { HttpResponse } from "../../data/models";
import {Authentication} from "../../domain/usecases/authentications"

export class HttpClient implements Authentication {
  private BASE_URL = "http://localhost:5097/api/"

  instanceClient = axios.create({
    baseURL: this.BASE_URL 
  })

  async get(path: string): Promise<any> {
    let response = {} as HttpResponse;

    try{ 
      const client: AxiosResponse = await this.instanceClient.get(path)
      response = client.data
    } catch(err) {
      console.error(err)
    }

    return response
  }
}