import path from 'path';
import fs from 'fs';
import parse from './utils.js';

const getPath = (filepath) => path.resolve(process.cwd(), filepath);
const extensionPath = (filepath) => path.extname(filepath).slice(1);

const gendiff = (filepath1, filepath2) => {
  const fullPathFile1 = getPath(filepath1);
  const fullPathFile2 = getPath(filepath2);

  const extensionPathFile1 = extensionPath(filepath1);
  const extensionPathFile2 = extensionPath(filepath2);

  const parseFile1 = parse(fs.readFileSync(fullPathFile1, 'utf8'), extensionPathFile1);
  const parseFile2 = parse(fs.readFileSync(fullPathFile2, 'utf8'), extensionPathFile2);
  console.log(parseFile1, parseFile2);
};

export default gendiff;
