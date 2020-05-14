import JConfig from './index';

test('fromJson should work', () => {
  const config = JConfig.fromJson(`{
    "first": true,
    "second": []
  }`);
  expect(config.root.type).toEqual("object");
  expect(config.root.props.first.type).toEqual("boolean");
  expect(config.root.props.second.type).toEqual("array");
});
