package com.nazonazo_app.shit_forces.account

import com.fasterxml.jackson.annotation.JsonCreator
import com.google.gson.Gson
import com.nazonazo_app.shit_forces.session.SessionController
import org.springframework.web.bind.annotation.*
import javax.servlet.http.HttpServletResponse

@RestController
class AccountController(private val accountInfoRepository: AccountsInfoRepository,
                        private val sessionController: SessionController) {

    private data class Response(val result: Boolean, val statement: String = "")
    data class RequestedAccount @JsonCreator constructor(val name: String, val password: String)
    private data class AccountInfoForHttpRequest(val name: String, val rating: Int)

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

    @PostMapping("db-access/login-account",
                 headers = ["Content-Type=application/json"])
    fun loginAccount(@RequestBody requestAccount: RequestedAccount,
                     servletResponse: HttpServletResponse): String {
        val createSessionResult = sessionController.createNewSession(servletResponse)
        val response = Response(createSessionResult.first, createSessionResult.second)
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
            val getAccount = accountInfoRepository.findByAccountName(accountName)
            if (getAccount == null) {
                throw Exception("Account Not Found")
            } else {
                Response(true, Gson().toJson(AccountInfoForHttpRequest(getAccount.name, getAccount.rating)))
            }
        } catch (e: Exception) {
            Response(false, e.toString())
        }
        return Gson().toJson(accountResponse)
    }
}
