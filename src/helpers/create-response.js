const responseSuccess = (message, data) => {
    return {
        code: 200,
        message: message,
        data: data
    }
}

const responseError = (code, message, error ) => {
    return {
        code: code,
        message: message,
        error: error
    }
}

module.exports = {
    responseError,
    responseSuccess
}