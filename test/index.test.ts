/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */

import path from 'path';

beforeEach((): void => {
  jest.resetModules();
});

test('Throws an error if no directory is set.', (): void => {
  const localRulesPlugin = require('../src');

  expect((): any => localRulesPlugin.rules).
    toThrowError(`no directory defined, use method 'addDirectories'`);
});

test('Throws an error if folder does not exists.', (): void => {
  const localRulesPlugin = require('../src');

  localRulesPlugin.addDirectories([
    '/tmp/nothingToFind'
  ]);

  expect((): any => localRulesPlugin.rules).
    toThrowError('one of the folder did not exist.');
});

test('Throws an error when no rules are existing in existing files.', (): void => {
  const localRulesPlugin = require('../src');

  localRulesPlugin.addDirectories([
    path.resolve(path.join(__dirname, 'mockedRules/noRules'))
  ]);

  expect((): any => localRulesPlugin.rules).
    toThrowError('no rules found.');
});

test('Returns an object with all rules from only one folder.', (): void => {
  const localRulesPlugin = require('../src');

  localRulesPlugin.addDirectories([
    path.resolve(path.join(__dirname, 'mockedRules/rulesSet1'))
  ]);

  const { rules } = localRulesPlugin;

  expect(rules).toHaveProperty('first-ruleset-first-rule');
  expect(rules).toHaveProperty('first-ruleset-second-rule');

  expect(Object.keys(rules)).toHaveLength(2);
});

test('Returns an object with all rules from only multiple folder.', (): void => {
  const localRulesPlugin = require('../src');

  localRulesPlugin.addDirectories([
    path.resolve(path.join(__dirname, 'mockedRules/rulesSet1')),
    path.resolve(path.join(__dirname, 'mockedRules/rulesSet2'))
  ]);

  const { rules } = localRulesPlugin;

  expect(rules).toHaveProperty('first-ruleset-first-rule');
  expect(rules).toHaveProperty('first-ruleset-second-rule');
  expect(rules).toHaveProperty('second-ruleset-first-rule');
  expect(rules).toHaveProperty('second-ruleset-second-rule');

  expect(Object.keys(rules)).toHaveLength(4);
});
