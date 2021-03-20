package com.example.gameparty.data.login

import com.example.gameparty.data.api.ApiService
import com.example.gameparty.data.api.RetrofitInstance
import com.example.gameparty.data.model.LoggedInUser
import com.example.gameparty.data.model.SignInRequest
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response
import java.io.IOException

class SignUpDataSource {

    fun signup(email: String, password: String): Result<LoggedInUser> {

        lateinit var responseLoggedInUser: LoggedInUser

        try {
            // TODO: handle loggedInUser authentication

            val retIn = RetrofitInstance.getRetrofitInstance().create(ApiService::class.java)

            retIn.signup(email, password).enqueue(object :
                Callback<SignInRequest> {
                override fun onFailure(call: Call<SignInRequest>, t: Throwable) {

                }

                override fun onResponse(
                    call: Call<SignInRequest>,
                    response: Response<SignInRequest>
                ) {
                    if (response.code() == 200) {

                        //초기화
                        responseLoggedInUser.email = response.body()..;



                    } else if (response.code() == 400) {
                        //중복
                        //if (response.body()!!.status == MessageCode. ){

                        //}

                    }
                }
            })
            //토큰 넘겨주고
            return Result.Success(responseLoggedInUser)
        } catch (e: Throwable) {
            return Result.Error(IOException("Error logging in", e))
        }
    }
}