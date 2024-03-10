import {SearchResultFull} from '../models/searchResults';
import {BaseApi} from './base-api';

export class SearchApi extends BaseApi {
  constructor() {
    super();
  }

  public async getSearchResult(searchText: string): Promise<SearchResultFull> {
    return await this.getWithParams('', searchText);
  }
}
