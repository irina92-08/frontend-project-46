import stylish from './stylish.js';
import plain from './plain.js';

const getFormatter = (data, format) => {
  if (format === 'stylish') {
    return ['{', stylish(data), '}'].join('\n');
  }
  return plain(data);
};
export default getFormatter;
