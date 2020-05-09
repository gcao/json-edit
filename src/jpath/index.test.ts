import JPath from './index';

test('isRoot should work', () => {
  let path = JPath.Root();
  expect(path.isRoot()).toBeTruthy();

  path = JPath.Root().createArrayChild(0);
  expect(path.isRoot()).toBeFalsy();
});

test('search should work', () => {
  let target: any = [
    "first",
    {
      "a": "a-value",
    }
  ];
  let root = JPath.Root();
  expect(root.search(target)).toEqual(target);
  let path = root.createArrayChild(0);
  expect(path.search(target)).toEqual("first");
});
