package com.nazonazo_app.shit_forces.session

import lombok.Data
import org.springframework.context.annotation.Scope
import org.springframework.stereotype.Component
import org.springframework.stereotype.Controller
import java.io.Serializable
import javax.servlet.http.HttpServletResponse
class SessionData : Serializable {
    fun addSessionId(name: String, response: HttpServletResponse) {
    }
}