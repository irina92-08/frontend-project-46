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

const expect1 = getFixturePath('expectedStylish.txt');
const expect2 = getFixturePath('expectedPlain.txt');
const expect3 = getFixturePath('expectedJSON.txt');

const readExpect1 = fs.readFileSync(expect1, 'utf8');
const readExpect2 = fs.readFileSync(expect2, 'utf8');
const readExpect3 = fs.readFileSync(expect3, 'utf8');

test('gendiff json, formatter stylish', () => {
  expect(gendiff(pathFile1, pathFile2)).toBe(readExpect1);
});

test('gendiff yaml, yml. Formatter stylish', () => {
  expect(gendiff(pathFileYml1, pathFileYml2)).toBe(readExpect1);
  expect(gendiff(pathFileYaml1, pathFileYaml2)).toBe(readExpect1);
});

test('gendiff json, formatter plain', () => {
  expect(gendiff(pathFile1, pathFile2, 'plain')).toBe(readExpect2);
});

test('gendiff yaml, yml. Formatter plain', () => {
  expect(gendiff(pathFileYml1, pathFileYml2, 'plain')).toBe(readExpect2);
  expect(gendiff(pathFileYaml1, pathFileYaml2, 'plain')).toBe(readExpect2);
});

test('gendiff json, formatter JSON', () => {
  expect(gendiff(pathFile1, pathFile2, 'json')).toBe(readExpect3);
});

test('gendiff yaml, yml. Formatter JSON', () => {
  expect(gendiff(pathFileYml1, pathFileYml2, 'json')).toBe(readExpect3);
  expect(gendiff(pathFileYaml1, pathFileYaml2, 'json')).toBe(readExpect3);
});
