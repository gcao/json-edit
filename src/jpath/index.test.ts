import JPath from './index';

test('JPath should work', () => {
  let path = JPath.Root();
  expect(path.isRoot()).toBeTruthy();
});