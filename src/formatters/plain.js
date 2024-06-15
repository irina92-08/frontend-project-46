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
  let updatedValue;

  const iter = (data, path) => data.map((node) => {
    const pathResult = `${path}${node.key}`;
    const isNested = node.status === 'nested';
    if (isNested) {
      return iter(node.value, `${pathResult}.`);
    }

    switch (node.status) {
      case 'added':
        return `Property '${pathResult}' was ${node.status} with value: ${valueStr(node.value)}`;
      case 'removed':
        return `Property '${pathResult}' was ${node.status}`;
      case 'updated':
        if (node.format === '-') {
          updatedValue = node.value;
          return '';
        }
        return `Property '${pathResult}' was updated. From ${valueStr(updatedValue)} to ${valueStr(node.value)}`;
      default:
        return '';
    }
  })
    .filter(Boolean)
    .join('\n');

  return iter(astData, '');
};

export default plain;
