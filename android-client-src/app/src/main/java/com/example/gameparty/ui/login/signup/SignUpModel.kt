package com.example.gameparty.ui.login.signup

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import com.example.gameparty.R
import com.example.gameparty.data.login.LoginRepository
import com.example.gameparty.data.login.Result
import com.example.gameparty.data.login.SignUpRepository
import com.example.gameparty.ui.login.LoggedInUserView
import com.example.gameparty.ui.login.LoginFormState
import com.example.gameparty.ui.login.LoginResult

class SignUpModel(private val signUpRepository: SignUpRepository) : ViewModel() {

    private val _loginForm = MutableLiveData<LoginFormState>()
    val loginFormState: LiveData<LoginFormState> = _loginForm

    private val _loginResult = MutableLiveData<LoginResult>()
    val loginResult: LiveData<LoginResult> = _loginResult

    fun signup(email: String, password: String) {
        //can be launched in a separate asynchronous job
        val result = signUpRepository.signup(email, password)

        if (result is Result.Success) {
            _loginResult.value =
                LoginResult(success = LoggedInUserView(displayName = result.data.email))

        } else {
            _loginResult.value = LoginResult(error = R.string.login_failed)
        }
    }
}