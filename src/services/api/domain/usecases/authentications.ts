import { HttpResponse } from "../../data/models"

export interface Authentication {
  get(path: string): Promise<any>
  // post(): Promise<HttpResponse>
}