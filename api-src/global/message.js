
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
    MATCH_ALREADY_JOINED = 7;
    MATCH_ID_NOT_FUND = 8;



    USER_NOT_FOUND = 201;

    WRONG_EMAIL_FORMAT = 100;
    WRONG_PASSWORD = 101; 
    REQUIRE_PASSWORD = 101;

    UNKNOWN = 9999;
}
module.exports = {
    Message,
    Status : new StatusCode()
};