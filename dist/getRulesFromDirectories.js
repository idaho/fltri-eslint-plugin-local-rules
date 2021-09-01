"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRulesFromDirectories = void 0;
const getRulesFromDirectories = (directories) => directories.
    reduce((previousRules, directory) => ({
    ...previousRules,
    // eslint-disable-next-line global-require, @typescript-eslint/no-require-imports
    ...require(directory)
}), {});
exports.getRulesFromDirectories = getRulesFromDirectories;
