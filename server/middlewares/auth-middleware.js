const tokenService = require('../services/token-service.js')
const ApiErrorController = require('../controllers/apiError-controller.js')

module.exports = function (req, res, next) {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return next(ApiErrorController.badRequest("Missing authorization header"))

        }

        const accessToken = authHeader.split(' ')[1]
        if (!accessToken) {
            return next(ApiErrorController.forbidden("Unauthorized user"))
        }

        const userData = tokenService.validateAccessToken(accessToken)
        if (!userData) {
            return next(ApiErrorController.forbidden("Invalid access token"))
        }

        req.user = userData
        next()

    } catch (e) {
        return next(ApiErrorController.badRequest(e.message))
    }
}