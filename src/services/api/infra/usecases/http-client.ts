import axios, { AxiosResponse } from 'axios';
import { HttpResponse } from '../../data/models';
import { Authentication } from '../../domain/usecases/authentications';

export class HttpClient implements Authentication {
  private readonly BASE_URL = 'http://localhost:5097/api/';
  // adb reverse tcp:5097 tcp:5097

  instanceClient = axios.create({
    baseURL: this.BASE_URL
  });

  async get(path: string): Promise<any> {
    let response = {} as HttpResponse;

    try {
      const client: AxiosResponse = await this.instanceClient.get(path);
      response = client.data;
    } catch (err) {
      console.error(err);
    }

    return response;
  }

  async post(path: string, body: any): Promise<any> {
    let response: any = null;

    try {
      response = await this.instanceClient.post(path, body);
    } catch (err) {
      console.error(err);
    }

    return response;
  }
}
