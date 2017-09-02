module.exports = function (app, express) {

    var apiRouter = express.Router();

    var service = require('./service.js');

    apiRouter.get('/me', function (req, res) {

        res.json({message: "Hi from server"});
    });

    apiRouter.get('/departamentos', function (req, res) {

        res.json(service.getLocationsByType("departamento"));
    });

    apiRouter.get('/provincias', function (req, res) {

        res.json(service.getLocationsByType("provincia"));
    });

    apiRouter.get('/distritos', function (req, res) {

        res.json(service.getLocationsByType("distrito"));
    });
    
    return apiRouter;
}