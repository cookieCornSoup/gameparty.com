

class ServiceError extends Error{
    constructor(httpStatus, status, message, data){
        super(message);
        this.status = status;
        this.httpStatus = httpStatus;
        this.data = [];
    }   
}

module.exports = ServiceError;