package com.example.gameparty.data.model

data class SignInRequest(
    val status: Int,
    val message: String,
    var data: SignUpReData
    )

data class SignUpReData(val token: String)