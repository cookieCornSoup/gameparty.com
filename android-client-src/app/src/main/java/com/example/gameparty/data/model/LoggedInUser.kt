package com.example.gameparty.data.model

/**
 * Data class that captures user information for logged in users retrieved from LoginRepository
 */
data class LoggedInUser(
        var email: String,
        val token: String
)