"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const fs_extra_1 = require("fs-extra");
const levelDbPath = path_1.join(__dirname, 'db');
fs_extra_1.ensureDirSync(levelDbPath);
//# sourceMappingURL=index.js.map