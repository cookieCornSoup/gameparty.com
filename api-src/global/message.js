
class Message{
    constructor(status, message, data){
        this.status = status; 
        this.message = message;
        this.data = data;
    }
}

class StatusCode{
    SUCCESS = 0;

    // 서버가 DB와 통신하는데 문제가 생긴경우
    DB_ERROR = 1;
    //DB에서 유저를 찾지 못한경우
    DB_USER_NOT_FOUND = 2;


    WRONG_REQUEST_DATA = 2;
    TOKEN_ERROR = 4;
    DATA_NOT_FOUND = 5; 
    MATCH_ALREADY_JOINED = 7;
    MATCH_ID_NOT_FUND = 8;


 

    //이메일 형식이 잘못됨
    WRONG_EMAIL_FORMAT = 100; 
    //잘못된 비밀번호
    WRONG_PASSWORD = 101;  
    //비밀번호를 
    REQUIRE_PASSWORD = 102;

    UNKNOWN = 9999;
}
module.exports = {
    Message,
    Status : new StatusCode()
};