
class Message{
    constructor(status, message, data){
        this.status = status; 
        this.message = message;
        this.data = data;
    }
}

class StatusCode{
    SUCCESS = 0;
    DB_ERROR = 1;
    WRONG_REQUEST_DATA = 2;
    TokenError = 4;
    DATA_NOT_FOUND = 5;
    WRONG_PASSWORD = 6;
    MATCH_ALREADY_JOINED = 7;
    MATCH_ID_NOT_FUND = 8;
    UNKNOWN = 9999;
}
module.exports = {
    Message,
    Status : new StatusCode()
};