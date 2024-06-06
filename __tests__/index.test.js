import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { test, expect } from '@jest/globals';
import fs from 'fs';
import gendiff from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => join(__dirname, '..', '__fixtures__', filename);
const pathFile1 = getFixturePath('file1.json');
const pathFile2 = getFixturePath('file2.json');
const pathFileYml1 = getFixturePath('file1.yml');
const pathFileYml2 = getFixturePath('file2.yml');
const pathFileYaml1 = getFixturePath('file1.yaml');
const pathFileYaml2 = getFixturePath('file2.yaml');

const expect1 = getFixturePath('expected.txt');

const readExpect = fs.readFileSync(expect1, 'utf8');

test('gendiff json', () => {
  expect(gendiff(pathFile1, pathFile2)).toBe(readExpect);
});

test('gendiff yaml, yml', () => {
  expect(gendiff(pathFileYml1, pathFileYml2)).toBe(readExpect);
  expect(gendiff(pathFileYaml1, pathFileYaml2)).toBe(readExpect);
});
