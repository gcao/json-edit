import * as R from "ramda";

export class ConfigItem {
  public type: string;
  _props?: any;
  _children?: ConfigItem;

  get props() {
    if (!this._props) {
      this._props = new Map();
    }
    return this._props;
  }

  get children(): ConfigItem {
    if (!this._children) {
      this._children = new ConfigItem();
    }
    return this._children;
  }

  static fromSerializable(o: any): ConfigItem {
    let config = new ConfigItem();
    config.type = o.type;
    if (o.type === "array") {
      config._children = this.fromSerializable(o.children);
    } else if (o.type === "object") {
      config._props = {} as any;
      for (let [key, value] of Object.entries(o.props)) {
        config._props[key] = this.fromSerializable(value);
      }
    }
    return config;
  }

  public static deserialize(json: string): ConfigItem {
    return this.fromSerializable(JSON.parse(json));
  }

  constructor() {
    this.type = "any";
  }

  toSerializable(): any {
    let o: any = {};
    o.type = this.type;
    if (o.type === "array") {
      o.children = this.children.toSerializable();
    } else if (o.type === "object") {
      o.props = {};
      for (let [key, value] of Object.entries(this.props)) {
        o.props[key] = (value as ConfigItem).toSerializable();
      }
    }
    return o;
  }

  public toString() {
    return JSON.stringify(this.toSerializable(), null, 2);
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

    if (config.type === "array") {
      if (data.length > 0) {
        this.dataToConfig(data[0], config.children);
      }
    } else if (data && config.type === "object") {
      for (let [key, value] of Object.entries(data)) {
        let childConfig = new ConfigItem();
        config.props[key] = childConfig;
        this.dataToConfig(value, childConfig);
      }
    }
  }

  public static deserialize(json: string): JConfig {
    let config = new JConfig();
    let parsed = JSON.parse(json);
    config.root = ConfigItem.fromSerializable(parsed.root);
    return config;
  }

  public toString(): string {
    let o: any = {};
    o.root = this.root.toSerializable();
    return JSON.stringify(o, null, 2);
  }
}
