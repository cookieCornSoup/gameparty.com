package com.example.gameparty.ui.login.signup

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.lifecycle.Observer
import androidx.lifecycle.ViewModelProvider
import com.example.gameparty.databinding.ActivitySignUpBinding
import com.example.gameparty.ui.login.LoginViewModelFactory

class SignUpActivity : AppCompatActivity() {

    private lateinit var signUpModel: SignUpModel
    private lateinit var binding: ActivitySignUpBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        binding = ActivitySignUpBinding.inflate(layoutInflater)
        setContentView(binding.root)

        val signup = binding.signUp

        signUpModel = ViewModelProvider(this, LoginViewModelFactory())
            .get(SignUpModel::class.java)

        signUpModel.loginFormState.observe(this@SignUpActivity, Observer {
            val loginState = it ?: return@Observer
            })

        signup.setOnClickListener {

            val email = binding.userEmail.text.toString()  //null
            val password = binding.password.text.toString()

            signUpModel.signup(email, password)

        }
    }
}
