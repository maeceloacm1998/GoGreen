import { Authentication } from "../../domain/usecases/authentications";
import { HttpClient } from "../../infra/usecases/http-client";
import { HttpResponse } from "../models";

export class HttpRemoteAuthentication implements Authentication {
  constructor(private readonly httpClient: HttpClient) {}

  async get(path: string): Promise<any> {
    if(path.length == 0) {
      console.error("Path não encontrado")
    }

    return await this.httpClient.get(path)
  }

  async post(path: string, body: any): Promise<any> {
    if(path.length == 0) {
      console.error("Path não encontrado")
    }

    return await this.httpClient.post(path, body)
  }
}