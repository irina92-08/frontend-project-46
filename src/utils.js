import _ from 'lodash';

export const getArrayExtension = (data1, data2) => {
  const keyValueData1 = Object.keys(data1);
  const keyValueData2 = Object.keys(data2);
  const union = _.union(keyValueData1, keyValueData2);

  const collData = union.reduce((acc, key) => {
    if (!Object.hasOwn(data1, key)) {
      return [...acc, {
        key, value: data2[key], status: 'added', format: '+',
      }];
    }
    if (!Object.hasOwn(data2, key)) {
      return [...acc, {
        key, value: data1[key], status: 'deleted', format: '-',
      }];
    }
    if (data1[key] !== data2[key]) {
      if (_.isObject(data1[key]) && _.isObject(data2[key])) {
        return [...acc, {
          key, value: getArrayExtension(data1[key], data2[key]), status: 'nested', format: ' ',
        }];
      }

      return [...acc, {
        key, value: data1[key], status: 'changed', format: '-',
      },
      {
        key, value: data2[key], status: 'changed', format: '+',
      }];
    }

    return [...acc, {
      key, value: data1[key], status: 'unchanged', format: ' ',
    }];
  }, []);
  return _.sortBy(collData, ({ key }) => key);
};

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

export const stailish = (arrayData) => {
  const iter = (node, depth) => node.map((data) => {
    const isNested = data.status === 'nested';
    const repeat = ' '.repeat(depth);
    if (!isNested) {
      return `${repeat}${data.format} ${data.key}: ${stringiFy(data.value, depth)}`;
    }
    return `${repeat}${data.format} ${data.key}: {\n${iter(data.value, depth + 4)}\n${repeat}  }`;
  }).join('\n');
  return iter(arrayData, 2);
};
