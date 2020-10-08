package com.nazonazo_app.shit_forces

import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable

@Controller
class SinglePageController {
    @GetMapping("/")
    fun any(model: Model): String {
        return "forward:/index.html"
    }
}