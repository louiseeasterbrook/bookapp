import {SearchApi} from '../api/search-api';

export class Environment {
  private static instance: Environment;

  public searchApi: SearchApi;

  protected constructor() {
    this.searchApi = new SearchApi();
  }

  public async setup(): Promise<void> {
    await this.searchApi.setup('search.json?');
  }

  public static getInstance(): Environment {
    if (!Environment.instance) {
      Environment.instance = new Environment();
    }
    return Environment.instance;
  }
}
