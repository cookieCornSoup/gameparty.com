package com.example.gameparty.ui.login

import android.content.ContentValues.TAG
import android.util.Log
import android.util.Patterns
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import com.example.gameparty.data.LoginRepository
import com.example.gameparty.data.Result
import com.example.gameparty.R
import com.example.gameparty.data.api.ApiService
import com.example.gameparty.data.api.MessageCode
import com.example.gameparty.data.api.RetrofitBuilder
import com.example.gameparty.data.api.RetrofitInstance
import com.example.gameparty.data.model.SignUpRequest
import com.example.gameparty.data.model.SignUpUser
import okhttp3.ResponseBody
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response
import retrofit2.Retrofit

class LoginViewModel(private val loginRepository: LoginRepository) : ViewModel() {

    private val _loginForm = MutableLiveData<LoginFormState>()
    val loginFormState: LiveData<LoginFormState> = _loginForm

    private val _loginResult = MutableLiveData<LoginResult>()
    val loginResult: LiveData<LoginResult> = _loginResult


    fun login(email: String, password: String) {
        // can be launched in a separate asynchronous job
        val result = loginRepository.login(email, password)

        if (result is Result.Success) {
            _loginResult.value =
                LoginResult(success = LoggedInUserView(displayName = result.data.displayName))
        } else {
            _loginResult.value = LoginResult(error = R.string.login_failed)
        }



    }

    fun loginDataChanged(email: String, password: String) {
        if (!isEmailValid(email)) {
            _loginForm.value = LoginFormState(emailError = R.string.invalid_email)
        } else if (!isPasswordValid(password)) {
            _loginForm.value = LoginFormState(passwordError = R.string.invalid_password)
        } else {
            _loginForm.value = LoginFormState(isDataValid = true)
        }
    }

    private fun isEmailValid(email: String): Boolean {
        return if (email.contains('@')) {
            Patterns.EMAIL_ADDRESS.matcher(email).matches()
        } else {
            email.isNotBlank()
        }
    }

    // A placeholder password validation check
    private fun isPasswordValid(password: String): Boolean {
        return password.length > 8
    }


    fun signUp(email: String, password: String) {

        val retIn = RetrofitInstance.getRetrofitInstance().create(ApiService::class.java)
        val registerInfo = SignUpUser(email, password)

        retIn.signup(email, password).enqueue(object :
            Callback<SignUpRequest> {
            override fun onFailure(call: Call<SignUpRequest>, t: Throwable) {

            }

            override fun onResponse(call: Call<SignUpRequest>, response: Response<SignUpRequest>) {
                if (response.code() == 200) {

                } else if(response.code() == 400){

                    //중복
                    if (response.body()!!.status == MessageCode. ){

                    }

                }
            }
        })
    }

}


