import chromeWebstoreUpload from 'chrome-webstore-upload';
import fs from 'fs';
/* eslint-disable-next-line */
import zipFolder from './zipFolder.js';

const browser = 'chrome';

const folder = 'src';
const zipName = `${browser}.zip`;

function uploadZip() {
  // credentials and IDs from gitlab-ci.yml file (your appropriate config file)
  const REFRESH_TOKEN = process.env.WEBSTORE_REFRESH_TOKEN;
  const EXTENSION_ID = process.env.WEBSTORE_EXTENSION_ID;
  const CLIENT_SECRET = process.env.WEBSTORE_CLIENT_SECRET;
  const CLIENT_ID = process.env.WEBSTORE_CLIENT_ID;

  const webStore = chromeWebstoreUpload({
    extensionId: EXTENSION_ID,
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    refreshToken: REFRESH_TOKEN,
  });

  // creating file stream to upload
  const extensionSource = fs.createReadStream(`./${zipName}`);

  // upload the zip to webstore
  webStore.uploadExisting(extensionSource).then(() => {
    /* eslint-disable no-console */
    console.log('Successfully uploaded the ZIP');

    // publish the uploaded zip
    webStore.publish().then(() => {
      /* eslint-disable no-console */
      console.log('Successfully published the newer version');
    }).catch((error) => {
      /* eslint-disable no-console */
      console.log(`Error while publishing uploaded extension: ${error}`);
      process.exit(1);
    });
  }).catch((error) => {
    /* eslint-disable no-console */
    console.log(`Error while uploading ZIP: ${error}`);
    process.exit(1);
  });
}

zipFolder(folder, zipName)
  .then(() => {
    /* eslint-disable no-console */
    console.log(`Successfully Zipped ${folder} and saved as ${zipName}`);
    uploadZip(); // on successful zipping, call upload
  })
  .catch((err) => {
    /* eslint-disable no-console */
    console.log('Can not create zip:', err);
    process.exit(1);
  });
