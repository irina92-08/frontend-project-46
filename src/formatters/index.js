import stylish from './stylish.js';
import plain from './plain.js';
import jsonString from './json.js';

const getFormatter = (data, format) => {
  switch (format) {
    case 'stylish':
      return ['{', stylish(data), '}'].join('\n');
    case 'plain':
      return plain(data);
    default:
      return jsonString(data);
  }
};
export default getFormatter;
