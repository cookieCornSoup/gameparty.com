
class Message{
    constructor(status, message, data){
        this.status = status; 
        this.message = message;
        this.data = data;
    }
}

class StatusCode{
        
    //성공
      SUCCESS = 0;
            

    //데이터 베이스와 통신하는데 문제가 발생함
      DB_ERROR = 1;
            

    //데이터 베이스에서 유저를 찾지 못함
      DB_USER_NOT_FOUND = 2;
            

    //요청된 데이터가 잘못되었음
      WRONG_REQUEST_DATA = 3;
            

    //토큰 오류
      TOKEN_ERROR = 4;
            

    //데이터를 찾지 못함
      DATA_NOT_FOUND = 5;
            

    //해당 매치 ID를 찾을 수 없음.
      MATCH_ID_NOT_FUND = 2001;
            

    //잘못된 이메일 형식
      WRONG_EMAIL_FORMAT = 100;
            

    //틀린 패스워드
      WRONG_PASSWORD = 101;
            

    //비밀번호를 입력하지 않음
      REQUIRE_PASSWORD = 102;
            

    //알 수 없는 오류
      UNKNOWN = 9999;
            

}
    
module.exports = {
    Message,
    Status : new StatusCode()
};