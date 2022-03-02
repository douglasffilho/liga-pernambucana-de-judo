/* eslint-disable no-console */
const { execSync } = require('child_process');
const packageJson = require('./package.json');

const deps = Object.keys(packageJson.dependencies).join(' ');
const devDeps = Object.keys(packageJson.devDependencies).join(' ');

console.log('updateAllDependencies :: UPDATING DEPENDENCIES');
if (deps) execSync(`yarn remove ${deps} && yarn add -E ${deps}`);

console.log('updateAllDependencies :: UPDATING DEV DEPENDENCIES');
if (devDeps) execSync(`yarn remove ${devDeps} && yarn add -E -D ${devDeps}`);
