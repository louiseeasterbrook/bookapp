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

  public setup(): void {
    this.apisauce = create({
      baseURL: 'https://openlibrary.org/search.json?q=the+lord+of+the+rings',
      timeout: this.config.timeout,
    });

    this.apisauce.addMonitor(this.monitorApi);
  }

  public setToken(token: string): void {
    const bearerToken = `Bearer ${token}`;
    this.apisauce.setHeaders({
      Authorization: bearerToken,
    });
  }

  protected async get<T>(url: string): Promise<T> {
    try {
      const response: ApiResponse<T> = await this.apisauce.get(url);
      if (response.ok) {
        return response;
      }
      return response;
    } catch (err) {}
  }

  private monitorApi(response: ApiResponse<any>): void {
    const {config, duration} = response;
    if (this.config?.url) {
      console.log('CALL API:');
    }
  }
}
