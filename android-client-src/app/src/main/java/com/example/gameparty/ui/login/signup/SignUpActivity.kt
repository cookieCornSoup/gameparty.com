package com.example.gameparty.ui.login.signup

import android.os.Bundle
import android.util.Log
import androidx.appcompat.app.AppCompatActivity
import androidx.lifecycle.Observer
import androidx.lifecycle.ViewModelProvider
import com.example.gameparty.databinding.ActivitySignUpBinding
import com.example.gameparty.ui.login.LoginViewModel
import com.example.gameparty.ui.login.LoginViewModelFactory
import retrofit2.http.Tag

class SignUpActivity : AppCompatActivity() {

    private lateinit var loginViewModel: LoginViewModel

    private lateinit var binding: ActivitySignUpBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        binding = ActivitySignUpBinding.inflate(layoutInflater)
        setContentView(binding.root)

        val login = binding.signUp

        loginViewModel = ViewModelProvider(this, LoginViewModelFactory())
            .get(LoginViewModel::class.java)

        loginViewModel.loginFormState.observe(this@SignUpActivity, Observer {
            val loginState = it ?: return@Observer
            })

        login.setOnClickListener {

            val email = binding.userEmail.text.toString()  //null
            val password = binding.password.text.toString()

            loginViewModel.signUp(email, password)

        }
    }
}
