import * as R from "ramda";

export class ConfigItem {
  public type?: any;
  _props?: any;

  get props() {
    if (!this._props) {
      this._props = {};
    }
    return this._props;
  }

  constructor() {
  }
}

export default class JConfig {
  public root: ConfigItem;

  constructor() {
    this.root = new ConfigItem();
  }

  public static fromJson(json: string): JConfig {
    const config = new JConfig();
    const parsed = JSON.parse(json);
    this.dataToConfig(parsed, config.root);
    return config;
  }

  static dataToConfig(data: any, config: ConfigItem) {
    config.type = R.is(Array, data) ? "array" : typeof (data);

    if (config.type === "object") {
      for (let [key, value] of Object.entries(data)) {
        let childConfig = new ConfigItem();
        config.props[key] = childConfig;
        this.dataToConfig(value, childConfig);
      }
    }
  }
}
