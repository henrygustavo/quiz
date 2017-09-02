var fs = require('fs');
var readline = require('readline');

var service = {};
var locations = [];

service.readData = function () {
    console.log("readData");
    var lineReader = readline.createInterface({
        input: fs.createReadStream('./data/info.txt')
    });

    lineReader.
    on('line', function (line) {
 
        console.log(line);

        var locationLines = line.split('/');

        var count = 0;

        for(var index in locationLines) { 
            var location = locationLines[index].trim();
            if(location != ""){
                count++;
            }
        }

        var type = service.getType(count);

        console.log("main:");

        console.log(service.getCodeAndName(locationLines[count-1].trim()));

        console.log("parent:");
        if(count >= 2){
            console.log(+service.getCodeAndName(locationLines[count-2].trim()));
        }
        console.log("Type: "+ type);
    })
    .on('close', function () {
        console.log("close");
     });
}

service.getCodeAndName = function(line){

    var items = line.split(' ');
    
    var code = items[0].trim();

     var name = line.replace(code,"").trim();       

    return {  code , name};
}


service.getType = function(length){
    
    var type = "";
    
    switch(length){
        case 1:
        type = "departamento"
        break;

        case 2:
        type = "provincia"
        break;
        case 3:
        type = "distrito"
        break;
    }
    
    return type;
}

module.exports = service;