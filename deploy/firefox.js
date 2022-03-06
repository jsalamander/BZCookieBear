import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const editJsonFile = require('edit-json-file');

const file = editJsonFile(`${__dirname}/../src/manifest.json`);

// Make the necessary changes to the manifest
// To ensure firefox compatibility
file.set('manifest_version', 2);
file.append(
  'permissions', 'https://www.bzcookie.fans/*',
);
/* eslint-disable no-console */

console.log(file.get());
file.save();

const zipFolder = require('./zipFolder');

const browser = 'firefox';

const folder = 'src';
const zipName = `${browser}.zip`;

zipFolder(folder, zipName)
  .then(() => {
    /* eslint-disable no-console */
    console.log(`Successfully Zipped ${folder} and saved as ${zipName}`);
  })
  .catch((err) => {
    /* eslint-disable no-console */
    console.log('Can not create zip:', err);
    process.exit(1);
  });
