const getRulesFromDirectories = (directories: string[]): Record<string, any> =>
  directories.
    reduce((previousRules: Record<string, any>, directory: string): any =>
      ({
        ...previousRules,
        // eslint-disable-next-line global-require, @typescript-eslint/no-require-imports
        ...require(directory)
      })
    , {});

export {
  getRulesFromDirectories
};
