import * as R from "ramda";

// export interface IConfig {
//   required: boolean;
//   toString(): string;
// }

// export abstract class Config implements IConfig {
//   public required: boolean = false;

//   toString(): string {
//     throw new Error("Method not implemented.");
//   }
// }

// export class AnyConfig extends Config {
// }

// /**
//  * Allow specified properties only
//  */
// export class ObjectConfig extends Config {
// }

// /**
//  * Allows property with any name
//  */
// export class GenericObjectConfig extends Config {
// }

// /**
//  * All items should have the same type.
//  * If it includes different type of items, the children's type should be
//  * considered Any.
//  */
// export class ArrayConfig extends Config {
// }

// /**
//  * Fixed length array that allows different type of items
//  */
// export class TupleConfig extends Config {
// }

// export class SingleChoiceConfig extends Config {
// }

// export class MultiChoicesConfig extends Config {
// }

// export class BooleanConfig extends Config {
// }

// export class StringConfig extends Config {
// }

// export class NumberConfig extends Config {
// }

// export class DateConfig extends Config {
// }

// export class DateTimeConfig extends Config {
// }

// export class ColorConfig extends Config {
// }

export class ConfigItem {
  public type: string;
  _props?: Map<string, ConfigItem>;
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

  constructor() {
    this.type = "any";
  }

  /**
   * Return an object that can be serialized using JSON.stringify
   */
  toSerializable(): any {
    let o: any = {};
    o.type = this.type;
    if (o.type === "array") {
      o.children = this.children.toSerializable();
    } else if (o.type === "object") {
      o.props = {};
      this.props.forEach((value, key) => {
        o.props[key] = value.toSerializable();
      });
    }
    return o;
  }

  public toString() {
    return JSON.stringify(this.toSerializable(), null, 2);
  }

  /**
   * Deserialize from result of ConfigItem.toSerializable().
   *
   * @param o result of ConfigItem.toSerializable()
   */
  static fromSerializable(o: any): ConfigItem {
    let config = new ConfigItem();
    config.type = o.type;
    if (o.type === "array") {
      config._children = this.fromSerializable(o.children);
    } else if (o.type === "object") {
      config._props = new Map();
      for (let [key, value] of Object.entries(o.props)) {
        config._props.set(key, this.fromSerializable(value));
      }
    }
    return config;
  }
}

export default class JConfig {
  public root: ConfigItem;

  constructor() {
    this.root = new ConfigItem();
  }

  public toString(): string {
    let o: any = {};
    o.root = this.root.toSerializable();
    return JSON.stringify(o, null, 2);
  }

  public static fromJson(json: string): JConfig {
    const config = new JConfig();
    const parsed = JSON.parse(json);
    this.dataToConfig(parsed, config.root);
    return config;
  }

  private static dataToConfig(data: any, config: ConfigItem) {
    config.type = R.is(Array, data) ? "array" : typeof (data);

    if (config.type === "array") {
      if (data.length > 0) {
        this.dataToConfig(data[0], config.children);
      }
    } else if (data && config.type === "object") {
      for (let [key, value] of Object.entries(data)) {
        let childConfig = new ConfigItem();
        config.props.set(key, childConfig);
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
}
