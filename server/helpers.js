const fs = require('fs');
const path = require('path');

const fileReader = fileName => fs.createReadStream(path.join(__dirname, `/server/assests/${fileName}.json`));

module.exports = {
  fileReader,
};
