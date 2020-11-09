package com.nazonazo_app.shit_forces.session

import org.springframework.stereotype.Controller
import javax.servlet.http.HttpServletResponse


@Controller
class SessionController(private val sessionRepository: SessionRepository) {
    fun createNewSession(name: String, response: HttpServletResponse): Pair<Boolean, String> =
            try {
                val sessionId: String = ""
                sessionRepository.addNewSession(name, sessionId)
                Pair(true, sessionId)
            } catch (e: Exception) {
                Pair(false, e.toString())
    }
    fun checkSession(accountId: String, sessionId: String): Boolean{
        return TODO("return this session is valid")
    }
}