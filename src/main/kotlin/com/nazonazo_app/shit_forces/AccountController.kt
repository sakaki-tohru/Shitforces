package com.nazonazo_app.shit_forces

import com.fasterxml.jackson.annotation.JsonCreator
import com.google.gson.Gson
import org.springframework.web.bind.annotation.*

@RestController
class AccountController(private val accountInfoRepository: AccountInfoRepository) {
    private data class Response(val result: Boolean, val statement: String = "")
    data class RequestAccount @JsonCreator constructor(val name: String, val password: String)

    @RequestMapping("signin/new-account", headers = ["Content-Type=application/json"],
            method = [RequestMethod.POST])
    fun createNewAccount(@RequestBody requestAccount: RequestAccount): String {
        val response = try {
            accountInfoRepository.createAccount(requestAccount.name, requestAccount.password)
            Response(true)
        } catch(e: Exception) {
            Response(false, e.toString())
        }
        return Gson().toJson(response)
    }
}