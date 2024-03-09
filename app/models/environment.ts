export class Environment {
  private static instance: Environment;

  public bookApi: BookApi;

  protected constructor() {
    this.bookApi = new this.bookApi();
  }

  public async setup(): Promise<void> {
    await this.bookApi.setup('TODO');
  }
}
