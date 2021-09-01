import { areDirectoriesAvailable } from './areDirectoriesAvailable';
import { getRulesFromDirectories } from './getRulesFromDirectories';

let rulesDirectories: string[] = [];

export = {

  get rules (): Record<string, any> {
    if (rulesDirectories.length === 0) {
      throw new Error(`no directory defined, use method 'addDirectories'`);
    }

    if (!areDirectoriesAvailable(rulesDirectories)) {
      throw new Error(`one of the folder did not exist.`);
    }

    const rules = getRulesFromDirectories(rulesDirectories);

    if (Object.keys(rules).length === 0) {
      throw new Error(`no rules found.`);
    }

    return rules;
  },

  addDirectories (addDirectories: string[]): void {
    rulesDirectories = [
      ...rulesDirectories,
      ...addDirectories
    ];
  }

};
