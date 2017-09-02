var fs = require('fs');
var Location = require('./location.js');

module.exports = {

    getLocations: function () {

        var locations = [];

        const lines = fs.readFileSync('./data/info.txt').toString().split("\n");

        for (let index in lines) {

            locations.push(new Location(lines[index]));
        }

        return locations;
    }
};