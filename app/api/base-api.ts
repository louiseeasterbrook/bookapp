import {ApiResponse, ApisauceInstance, create} from 'apisauce';

export interface ApiConfig {
  url: String;
  timeout: number;
}

export const DEFAULT_API_CONFIG: ApiConfig = {
  url: '',
  timeout: 10000,
};

export class BaseApi {
  public apisauce: ApisauceInstance;
  public config: ApiConfig;
  public apiName: string | undefined;

  constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
    this.config = config;
  }

  public setup(apiName: string): void {
    this.apisauce = create({
      baseURL: `https://openlibrary.org/${apiName}`,
      timeout: this.config.timeout,
    });

    this.apisauce.addMonitor(this.monitorApi);
  }

  // public setToken(token: string): void {
  //   const bearerToken = `Bearer ${token}`;
  //   this.apisauce.setHeaders({
  //     Authorization: bearerToken,
  //   });
  // }

  protected async getWithParams<T>(url: string, param: string): Promise<T> {
    try {
      const response: ApiResponse<T> = await this.apisauce.get(url, {
        q: param,
      });
      if (response.ok) {
        return response.data;
      }
    } catch (err) {}
  }

  private monitorApi(response: ApiResponse<any>): void {
    const {config, duration} = response;
    // if (config?.url) {
    console.log(` -- CALL API: ${config.baseURL}${config?.url}`);
    // }
  }
}
