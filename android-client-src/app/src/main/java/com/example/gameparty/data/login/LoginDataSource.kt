package com.example.gameparty.data.login

import com.example.gameparty.data.api.ApiService
import com.example.gameparty.data.api.RetrofitInstance
import com.example.gameparty.data.model.LoggedInUser
import com.example.gameparty.data.model.SignInRequest
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response
import java.io.IOException

/**
 * Class that handles authentication w/ login credentials and retrieves user information.
 */
class LoginDataSource {

    fun login(email: String, password: String): Result<LoggedInUser> {
        try {
            // TODO: handle loggedInUser authentication

            val retIn = RetrofitInstance.getRetrofitInstance().create(ApiService::class.java)

            retIn.signup(email, password).enqueue(object :
                Callback<SignInRequest> {
                override fun onFailure(call: Call<SignInRequest>, t: Throwable) {

                }

                override fun onResponse(call: Call<SignInRequest>, response: Response<SignInRequest>) {
                    if (response.code() == 200) {

                    } else if (response.code() == 400) {
                        //중복
                        //if (response.body()!!.status == MessageCode. ){

                        //}

                    }
                }
            })

            return Result.Success()
        } catch (e: Throwable) {
            return Result.Error(IOException("Error logging in", e))
        }
    }

    fun logout() {
        // TODO: revoke authentication
    }
}