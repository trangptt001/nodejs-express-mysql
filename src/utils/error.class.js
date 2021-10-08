class ErrorResponse {
    constructor(statusCode, status, message) {
        this.statusCode = statusCode;
        this.status = status;
        this.message = message;
    }
}

module.exports = ErrorResponse;