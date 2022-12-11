export interface Authentication {
  get: (path: string) => Promise<any>;
  post: (path: string, body: any) => Promise<any>;
}
