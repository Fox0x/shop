class ApiErrorController extends Error {
    constructor(statusCode, message) {
        super()
        this.status = statusCode
        this.message = message
    }

    static badRequest(message) {
        return new ApiErrorController(404, message)
    }

    static forbidden(message) {
        return new ApiErrorController(403, message)
    }

}

module.exports = ApiErrorController