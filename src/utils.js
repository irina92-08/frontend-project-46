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

export const stringiFy = (arrayData) => arrayData.map((extensionDate) => {
  const resultKeyValue = ` ${extensionDate.format} ${extensionDate.key}: ${extensionDate.value}`;
  return resultKeyValue;
}).join('\n');
