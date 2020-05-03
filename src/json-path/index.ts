class JsonPath {
  parts: any;

  constructor(parts: any = []) {
    this.parts = parts;
  }

  size() {
    return this.parts.length;
  }

  append(part: any) {
    return new JsonPath([...this.parts, part]);
  }

  findIn(target: any) {
    this.parts.forEach((part: any) => {
      target = target[part];
    });
    return target;
  }

  toString() {
    if (this.parts.length === 0) return '';

    return 'this' + this.parts.map((part: any) => {
      if (typeof part === 'number') {
        return part < 0 ? '[*]' : `[${part}]`;
      } else {
        return `.${part}`;
      }
    }).join('');
  }
}

export default JsonPath;
