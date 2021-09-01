"use strict";
const areDirectoriesAvailable_1 = require("./areDirectoriesAvailable");
const getRulesFromDirectories_1 = require("./getRulesFromDirectories");
let rulesDirectories = [];
module.exports = {
    get rules() {
        if (rulesDirectories.length === 0) {
            throw new Error(`no directory defined, use method 'addDirectories'`);
        }
        if (!(0, areDirectoriesAvailable_1.areDirectoriesAvailable)(rulesDirectories)) {
            throw new Error(`one of the folder did not exist.`);
        }
        const rules = (0, getRulesFromDirectories_1.getRulesFromDirectories)(rulesDirectories);
        if (Object.keys(rules).length === 0) {
            throw new Error(`no rules found.`);
        }
        return rules;
    },
    addDirectories(addDirectories) {
        rulesDirectories = [
            ...rulesDirectories,
            ...addDirectories
        ];
    }
};
