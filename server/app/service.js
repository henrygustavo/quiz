var _ = require('lodash');
var locations =  require('./locationData.js').getLocations();

module.exports = {
    
    getLocationsByType: function (type) {
        
        return _.filter(locations, {type: type});
    }
};