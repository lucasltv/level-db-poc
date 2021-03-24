import {join} from 'path';
import {ensureDirSync} from 'fs-extra';

const levelDbPath = join(__dirname, 'db');
ensureDirSync(levelDbPath);
