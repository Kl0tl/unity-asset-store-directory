'use strict';

module.exports = function () {
  switch (process.platform) {
    case 'darwin':
      return process.env.HOME + '/Library/Unity/Asset Store';
    case 'win32':
      return 'C:\\Users\\' + process.env.USERPROFILE + '\\AppData\\Roaming\\Unity\\Asset Store';
    default:
      throw new Error('Unsupported platform ! Expected \'darwin\' or \'win32\', was \'' + process.platform + '\'');
  }
};
