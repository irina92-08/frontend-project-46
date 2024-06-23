import stylish from './stylish.js';
import plain from './plain.js';
import jsonString from './json.js';

const getFormatter = (data, format) => {
  switch (format) {
    case 'stylish':
      return stylish(data);
    case 'plain':
      return plain(data);
    case 'json':
      return jsonString(data);
    default:
      throw new Error(`Invalid format - ${format}`);
  }
};
export default getFormatter;
