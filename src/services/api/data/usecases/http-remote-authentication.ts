import { Authentication } from "../../domain/usecases/authentications";
import { HttpClient } from "../../infra/usecases/http-client";
import { HttpResponse } from "../models";

export class HttpRemoteAuthentication implements Authentication {
  constructor(private readonly httpClient: HttpClient) {}

  async get(path: string): Promise<any> {
    if(path.length == 0) {
      this.handleError("Path não encontrado", 401)
    }

    return await this.httpClient.get(path)
  }

  private handleError(message: string, code: number, body: any = {}): HttpResponse {
    return {
      message,
      code,
      body
    }
  }
}