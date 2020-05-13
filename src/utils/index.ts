const PROXY = "https://yacdn.org/serve/";

export default class LocationHandler {
  public hasJson: boolean = false;
  private jsonUrl?: string;
  public useProxy: boolean = false;

  constructor() {
    const url = new URL(window.location.toString());
    const proxy = url.searchParams.get('proxy');
    this.useProxy = proxy === '1' || proxy === 'true';

    let jsonUrl = url.searchParams.get('json-url');
    if (jsonUrl) {
      this.hasJson = true;
      if (this.useProxy) {
        jsonUrl = `${PROXY}${jsonUrl}`;
      }
      this.jsonUrl = jsonUrl;
    }
  }

  public async getText(): Promise<string> {
    let response = await fetch(decodeURI(this.jsonUrl as string));
    return response.text();
  }
}
