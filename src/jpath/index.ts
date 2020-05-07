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
}
