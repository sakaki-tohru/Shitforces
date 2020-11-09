package com.nazonazo_app.shit_forces.session

import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.stereotype.Repository

@Repository
class SessionRepository(private val jdbcTemplate: JdbcTemplate) {
    fun isValidSession(name: String, sessionId: String): Boolean {
        return TODO("is session valid")
    }
    fun addNewSession(name: String, sessionId: String){
    }
}