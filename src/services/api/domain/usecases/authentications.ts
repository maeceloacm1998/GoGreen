import { HttpResponse } from "../../data/models"

export interface Authentication {
  get(path: string): Promise<HttpResponse>
  // post(): Promise<HttpResponse>
}