import yaml from 'js-yaml';

const parse = (data, extension) => {
  const extensionColl = {
    json: JSON.parse,
    yaml: yaml.load,
    yml: yaml.load,
  };

  return extensionColl[extension](data);
};

export default parse;
