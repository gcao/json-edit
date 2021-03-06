import JConfig from './index';

test('JConfig.fromJson() should work', () => {
  let config = JConfig.fromJson(`{
    "first": true,
    "second": [],
    "third": [1],
    "string": "something"
  }`);
  expect(config.root.type).toEqual("object");
  expect(config.root.props.get("first")?.type).toEqual("boolean");
  expect(config.root.props.get("second")?.type).toEqual("array");
  expect(config.root.props.get("third")?.children.type).toEqual("number");
  expect(config.root.props.get("string")?.type).toEqual("string");
});

test('JConfig.deserialize() should work', () => {
  let config = JConfig.fromJson(`{
    "first": true,
    "second": [],
    "third": [1],
    "string": "something"
  }`);
  config = JConfig.deserialize(config.toString());
  expect(config.root.type).toEqual("object");
  expect(config.root.props.get("first")?.type).toEqual("boolean");
  expect(config.root.props.get("second")?.type).toEqual("array");
  expect(config.root.props.get("third")?.children.type).toEqual("number");
  expect(config.root.props.get("string")?.type).toEqual("string");
});
