import _ from 'lodash';

const valueStr = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  } if (typeof value === 'string') {
    return `'${value}'`;
  }
  return value;
};

const plain = (astData) => {
  const iter = (data, path) => data.reduce((acc, node, index, array) => {
    const pathResult = `${path}${node.key}`;
    const isNested = node.status === 'nested';
    if (isNested) {
      return [...acc, iter(node.value, `${pathResult}.`)];
    }
    switch (node.status) {
      case 'added':
        return [...acc, `Property '${pathResult}' was ${node.status} with value: ${valueStr(node.value)}`];
      case 'removed':
        return [...acc, `Property '${pathResult}' was ${node.status}`];
      case 'updated':
        if (node.format === '+') {
          const previousElement = array[index - 1].value;
          return [...acc, `Property '${pathResult}' was updated. From ${valueStr(previousElement)} to ${valueStr(node.value)}`];
        }
        return acc;
      default:
        return acc;
    }
  }, []).join('\n');
  return iter(astData, '');
};

export default plain;
