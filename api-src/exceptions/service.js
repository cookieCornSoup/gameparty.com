

class ServiceError extends Error{
    constructor(httpStatus, status, message, data){
        super(message); 
        this.httpStatus = httpStatus;
        this.status = status; 
        this.data = data || [];
    }   
}

module.exports = ServiceError;