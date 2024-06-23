import _ from 'lodash';

const stringiFy = (data, depthData) => {
  const iter = (node, depth) => {
    if (!_.isObject(node)) {
      return node;
    }

    const nodeKeyValue = Object.entries(node);
    const repeatSymbol = ' '.repeat(depth);
    const string = nodeKeyValue.map(([key, value]) => `\n   ${repeatSymbol} ${key}: ${iter(value, depth + 4)}`);
    return ['{', ...string, `\n${repeatSymbol}}`].join('');
  };
  return iter(data, depthData + 2);
};

const stylishString = (astData) => {
  const iter = (node, depth) => node.map((data) => {
    const isNested = data.status === 'nested';
    const repeat = ' '.repeat(depth);
    if (!isNested) {
      return `${repeat}${data.format} ${data.key}: ${stringiFy(data.value, depth)}`;
    }
    return `${repeat}${data.format} ${data.key}: {\n${iter(data.value, depth + 4)}\n${repeat}  }`;
  }).join('\n');
  return iter(astData, 2);
};

const stylish = (data) => ['{', stylishString(data), '}'].join('\n');

export default stylish;
