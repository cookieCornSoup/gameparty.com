package com.example.gameparty.data.api

enum class MessageCode(val status: Int){

    SUCCESS(0),
    DB_ERROR(1),
    WRONG_REQUEST_DATA(2),
    TokenError(4),
    DATA_NOT_FOUND(5),
    MATCH_ALREADY_JOINED(7),
    MATCH_ID_NOT_FUND(8),

    USER_NOT_FOUND (201),

    WRONG_EMAIL_FORMAT (100),
    REQUIRE_PASSWORD (101),
    WRONG_PASSWORD(101),

    UNKNOWN(9999)


}
