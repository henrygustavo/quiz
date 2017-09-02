module.exports = {

    getCodeAndNameAndType: function (locations, index) {

        var code, name, type;
        code =  name =  type = "";

        if (index > 0) {

            const location = locations[index];

            const sections = location.trim().split(' ');

            code = sections[0].trim();

            name = location.replace(code, "").trim();

            type = getType(index);
        }

        return {code, name, type};
    },
    getLastIndex: function (locations) {

        var lastIndex = -1;

        for (let index in locations) {

            if (locations[index].trim() !== "") {

                lastIndex++;
            }
        }

        return lastIndex;
    }
};

function getType(lastIndex) {

    var type = "";

    switch (lastIndex) {
        case 0:
            type = "departamento";
            break;
        case 1:
            type = "provincia";
            break;
        case 2:
            type = "distrito";
            break;
    }

    return type;
}