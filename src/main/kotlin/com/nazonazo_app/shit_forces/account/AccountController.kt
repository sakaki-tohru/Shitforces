package com.nazonazo_app.shit_forces.account

import com.fasterxml.jackson.annotation.JsonCreator
import com.google.gson.Gson
import org.springframework.web.bind.annotation.*

@RestController
class AccountController(private val accountInfoRepository: AccountsInfoRepository) {

    private data class Response(val result: Boolean, val statement: String = "")
    data class RequestedAccount @JsonCreator constructor(val name: String, val password: String)
    private data class AccountInfoForHttpRequest(val accountName: String, val rating: Int)

    @RequestMapping("db-access/new-account",
            headers = ["Content-Type=application/json"],
            method = [RequestMethod.POST])
    fun createAccount(@RequestBody requestAccount: RequestedAccount): String {
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
        return ""
    }
    @GetMapping("db-access/get-by-name/{accountName}")
    fun getAccountByName(@PathVariable("accountName") accountName: String): String {
        val accountResponse = try {
            val getUser = accountInfoRepository.findByUserName(accountName)
            if (getUser == null) {
                throw Error("User Not Found")
            } else {
                Response(true, Gson().toJson(AccountInfoForHttpRequest(getUser.name, getUser.rating)))
            }
        } catch (e: Exception) {
            Response(false, e.toString())
        }
        return Gson().toJson(accountResponse)
    }
}
