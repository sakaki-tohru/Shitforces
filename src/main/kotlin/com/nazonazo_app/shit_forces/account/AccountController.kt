package com.nazonazo_app.shit_forces.account

import com.fasterxml.jackson.annotation.JsonCreator
import com.google.gson.Gson
import org.springframework.web.bind.annotation.*

@RestController
class AccountController(private val accountInfoRepository: AccountsInfoRepository) {

    private data class Response(val result: Boolean, val statement: String = "")
    data class RequestedAccount @JsonCreator constructor(val name: String, val password: String)

    @RequestMapping("db-access/new-account", headers = ["Content-Type=application/json"],
            method = [RequestMethod.POST])
    fun createNewAccount(@RequestBody requestAccount: RequestedAccount): String {
        val response = try {
            accountInfoRepository.createAccount(requestAccount.name, requestAccount.password)
            Response(true)
        } catch (e: Exception) {
            Response(false, e.toString())
        }
        return Gson().toJson(response)
    }
    @GetMapping("db-access/all-account")
    fun getAllAccount(@RequestParam("page") page: String,
                      @RequestParam("limit") limit: Int): String{
        return "hello"
    }
}
