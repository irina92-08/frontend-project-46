import path from 'path';

const getPath = (filepath) => path.resolve(process.cwd(), filepath);

const gendiff = (filepath1, filepath2) => {
  const fullPathFile1 = getPath(filepath1);
  const fullPathFile2 = getPath(filepath2);

  console.log(fullPathFile1);
  console.log(fullPathFile2);
    
};

export default gendiff;
