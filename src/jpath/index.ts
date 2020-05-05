import { path } from "ramda";

export enum PathType {
  ROOT,
  ARRAY_ELEMENT,
  MAP_KEY,
  MAP_VALUE,
}

export default class JPath {
  public index?: number;
  public key?: String;

  private constructor(public parent: JPath | null, public type: PathType) {
  }

  public static Root(): JPath {
    return new JPath(null, PathType.ROOT);
  }

  public static ArrayElement(parent: JPath, index: number): JPath {
    let path = new JPath(parent, PathType.ARRAY_ELEMENT);
    path.index = index;
    return path;
  }

  public static MapKey(parent: JPath, key: String): JPath {
    let path = new JPath(parent, PathType.MAP_KEY);
    path.key = key;
    return path;
  }

  public static MapValue(parent: JPath, key: String): JPath {
    let path = new JPath(parent, PathType.MAP_VALUE);
    path.key = key;
    return path;
  }

  public isRoot(): boolean {
    return this.type === PathType.ROOT;
  }
}
