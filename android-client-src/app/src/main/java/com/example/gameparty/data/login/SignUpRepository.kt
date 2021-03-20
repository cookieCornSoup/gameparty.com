package com.example.gameparty.data.login

import com.example.gameparty.data.model.LoggedInUser
import com.example.gameparty.ui.login.LoginActivity

class SignUpRepository (val dataSource: SignUpDataSource){


    // in-memory cache of the loggedInUser object
    var user: LoggedInUser? = null
        private set

    val isLoggedIn: Boolean
        get() = user != null

    init {
        // If user credentials will be cached in local storage, it is recommended it be encrypted
        // @see https://developer.android.com/training/articles/keystore
        user = null
    }

    fun signup(email: String, password: String): Result<LoggedInUser> {

        val result = dataSource.signup(email, password)

        if (result is Result.Success) {
            setLoggedInUser(result.data)
        }

        return result
    }

    private fun setLoggedInUser(loggedInUser: LoggedInUser) {
        this.user = loggedInUser

        LoginActivity.prefs.setString("token",user.toString())
        // If user credentials will be cached in local storage, it is recommended it be encrypted
        // @see https://developer.android.com/training/articles/keystore
    }
}