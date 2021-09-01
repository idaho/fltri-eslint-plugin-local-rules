import fs from 'fs';

const areDirectoriesAvailable = (directories: string[]): boolean => {
  for (const directory of directories) {
    // eslint-disable-next-line no-sync
    if (!fs.existsSync(directory)) {
      return false;
    }
  }

  return true;
};

export {
  areDirectoriesAvailable
};
