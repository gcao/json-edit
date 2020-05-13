export default class LocationHandler {
  public hasJson: boolean = false;
  private jsonUrl?: string;

  constructor() {
    const url = new URL(window.location.toString());
    const jsonUrl = url.searchParams.get('json-url');
    if (jsonUrl) {
      this.hasJson = true;
      this.jsonUrl = jsonUrl;
    }
  }

  public async getText(): Promise<string> {
    let response = await fetch(decodeURI(this.jsonUrl as string));
    return response.text();
  }
}
