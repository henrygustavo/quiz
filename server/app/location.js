var helper = require('./helper.js');

module.exports = function (line) {

    const locationsLine = line.split('/');

    const lastIndex = helper.getLastIndex(locationsLine);

    const location = helper.getCodeAndNameAndType(locationsLine, lastIndex);

    const parentLocation = helper.getCodeAndNameAndType(locationsLine, lastIndex - 1);

    this.type = location.type;
    this.code = location.code;
    this.name = location.name;
    this.parentCode = parentLocation.code;
    this.parentName = parentLocation.name;
};
