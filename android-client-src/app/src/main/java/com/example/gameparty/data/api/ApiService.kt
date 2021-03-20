package com.example.gameparty.data.api

import com.example.gameparty.data.model.SignInRequest
import com.example.gameparty.data.model.SignUpUser
import retrofit2.Call
import retrofit2.http.Field
import retrofit2.http.FormUrlEncoded
import retrofit2.http.POST

interface ApiService {


    @POST("api/users/")
    @FormUrlEncoded
    fun signup(
        @Field("email") email: String,
        @Field("password") password: String,
    ): Call<SignInRequest>


    @POST("api/auth/")
    @FormUrlEncoded
    fun login(
        @Field("email") email: String,
        @Field("password") password: String,
    ): Call<SignInRequest>

}