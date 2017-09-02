module.exports = function (app, express) {
    var apiRouter = express.Router();

    var service = require('../services/service.js');

    service.readData()
    
    apiRouter.get('/', function (req, res) {

        res.json({message: "Hi from server"});
    });

    apiRouter.get('/states', function (req, res) {

        res.json({message: "2" });
    });

    return apiRouter;
}