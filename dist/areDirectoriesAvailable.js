"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.areDirectoriesAvailable = void 0;
const fs_1 = __importDefault(require("fs"));
const areDirectoriesAvailable = (directories) => {
    for (const directory of directories) {
        // eslint-disable-next-line no-sync
        if (!fs_1.default.existsSync(directory)) {
            return false;
        }
    }
    return true;
};
exports.areDirectoriesAvailable = areDirectoriesAvailable;
