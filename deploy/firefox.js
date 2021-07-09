const editJsonFile = require("edit-json-file");
let file = editJsonFile(`${__dirname}/../src/manifest.json`);

// Make the necessary changes to the manifest
// To ensure firefox compatibility
file.set("manifest_version", 2);
file.append(
    "permissions", "https://bzcookie.fans/*"
)
console.log(file.get());
file.save();

const zipFolder = require('./zipFolder.js')
const browser = 'firefox'

let folder = `src`
let zipName = `${browser}.zip`


zipFolder(folder, zipName)
	.then(() => {
		console.log(`Successfully Zipped ${folder} and saved as ${zipName}`)
	})
	.catch(err => {
		console.log('Can not create zip:', err)
		process.exit(1)
	})
