import * as R from "ramda";

export enum PathType {
  ROOT          = 0,
  ARRAY_ELEMENT = 1,
  MAP_KEY       = 2,
  MAP_VALUE     = 3,
  ARRAY_ALL     = 4,   // match all child elements of an array
}

export default class JPath {
  public index?: number;
  public key?: String;

  private constructor(public parent: JPath | null, public type: PathType) {
  }

  public static Root(): JPath {
    return new JPath(null, PathType.ROOT);
  }

  public createArrayChild(index: number): JPath {
    let path = new JPath(this, PathType.ARRAY_ELEMENT);
    path.index = index;
    return path;
  }

  public createArrayAllChildren(): JPath {
    let path = new JPath(this, PathType.ARRAY_ALL);
    return path;
  }

  public createMapKeyChild(key: string): JPath {
    let path = new JPath(this, PathType.MAP_KEY);
    path.key = key;
    return path;
  }

  public createMapValueChild(key: string): JPath {
    let path = new JPath(this, PathType.MAP_VALUE);
    path.key = key;
    return path;
  }

  public isRoot(): boolean {
    return this.type === PathType.ROOT;
  }

  /**
   * Search matching part in target
   *
   * @param target target JSON value
   */
  public search(target: any): any {
    let pathItems = this.spread();
    for (let i=0; i<pathItems.length; i++) {
      let pathItem = pathItems[i];
      switch(pathItem.type) {
        case PathType.ARRAY_ELEMENT:
          if (R.is(Array, target)) {
            target = target[pathItem.index as number];
          } else {
            return;
          }
          break;

        case PathType.MAP_KEY:
          if (R.is(Object, target)) {
            target = pathItem.key;
          } else {
            return;
          }
          break;

        case PathType.MAP_VALUE:
          if (R.is(Object, target)) {
            target = target[pathItem.key as string];
          } else {
            return;
          }
          break;

        case PathType.ARRAY_ALL:
          throw new Error("JPath search error: unsupported path type - ARRAY_ALL");
      }
    }

    return target;
  }

  /**
   * @param target root JSON value
   * @param newValue new value to replace the matched part
   *
   * @returns whole object with matching part replaced with newValue
   *          if the path matches the root value, then return newValue directly
   */
  public update(target: any, newValue: any): any {
    if (this.isRoot()) {
      return newValue;
    }

    let parentValue = (this.parent as JPath).search(target);
    switch (this.type) {
      case PathType.ARRAY_ELEMENT:
        if (R.is(Array, parentValue)) {
          parentValue[this.index as number] = newValue;
        } else {
          throw new Error("JPath update error: ARRAY_ELEMENT can only be applied on an array");
        }
        break;

      case PathType.MAP_VALUE:
        if (R.is(Array, parentValue)) {
          parentValue[this.key as string] = newValue;
        } else {
          throw new Error("JPath update error: MAP_VALUE can only be applied on an object");
        }
        break;

      default:
        throw new Error(`JPath update error: unsupported path type - ${PathType[this.type]}`);
    }

    return target;
  }

  public toString(): string {
    switch (this.type) {
      case PathType.ROOT:
        return "root";
      case PathType.ARRAY_ELEMENT:
        return `${this.parent?.toString()}[${this.index}]`;
      case PathType.ARRAY_ALL:
        return `${this.parent?.toString()}[*]`;
      case PathType.MAP_KEY:
      case PathType.MAP_VALUE:
        return `${this.parent?.toString()}["${this.key}"]`;
    }
  }

  private spread(): JPath[] {
    let items: JPath[] = [];
    let path: JPath = this;
    while (path !== null) {
      items.unshift(path);
      path = path.parent as JPath;
    }
    return items;
  }
}
