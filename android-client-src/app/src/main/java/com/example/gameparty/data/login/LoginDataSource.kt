package com.example.gameparty.data.login

import android.content.ContentValues.TAG
import android.util.Log
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

        lateinit var responseLoggedInUser: LoggedInUser

        try {
            // TODO: handle loggedInUser authentication

            val retIn = RetrofitInstance.getRetrofitInstance().create(ApiService::class.java)

            retIn.login(email, password).enqueue(object :
                Callback<SignInRequest> {
                override fun onFailure(call: Call<SignInRequest>, t: Throwable) {

                }

                override fun onResponse(call: Call<SignInRequest>, response: Response<SignInRequest>) {
                    if (response.code() == 200) {
                        responseLoggedInUser.email = response.body().toString();

                    } else if (response.code() == 400) {
                        //중복
                        //if (response.body()!!.status == MessageCode. ){
                        Log.i(TAG, "400에러 발생")
                        //}

                    }
                }
            })

            return Result.Success(responseLoggedInUser)
        } catch (e: Throwable) {
            return Result.Error(IOException("Error logging in", e))
        }
    }

    fun logout() {
        // TODO: revoke authentication
    }
}