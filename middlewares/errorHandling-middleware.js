const ApiErrors = require('../controllers/apiError-controller')


module.exports = function (err, req, res, next) {
    if (err instanceof ApiErrors) {
        return res.status(err.status).json({message: err.message});
    }

    return res.status(500).json({message: 'Server error'});
}