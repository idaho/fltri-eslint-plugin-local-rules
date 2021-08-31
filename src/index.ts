let rulesDirectories: string[] = [];

export = {
  get rules (): Record<string, any> {
    if (rulesDirectories.length === 0) {
      throw new Error('no custom local rule directory defined');
    }

    const rules = rulesDirectories.
      flatMap((directory): any =>
      // eslint-disable-next-line global-require, @typescript-eslint/no-require-imports
        require(directory));

    if (rules.length === 0) {
      throw new Error('no rules found');
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
