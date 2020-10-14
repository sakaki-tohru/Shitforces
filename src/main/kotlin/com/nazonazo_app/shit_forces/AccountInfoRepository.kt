package com.nazonazo_app.shit_forces

import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.jdbc.core.RowMapper
import org.springframework.security.crypto.bcrypt.BCrypt
import org.springframework.stereotype.Repository

@Repository
class AccountInfoRepository(private val jdbcTemplate: JdbcTemplate) {
    private val rowMapper = RowMapper<AccountInfo> {rs, _ ->
        AccountInfo(rs.getString("userName"), rs.getInt("rating"), rs.getString("passwordHash"))
    }
    fun findAll(): List<AccountInfo> =
            jdbcTemplate.query("SELECT userName, rating, passwordHash FROM accountInfo", rowMapper)

    private fun hashPassword(password: String): String {
        val salt: String = BCrypt.gensalt()
        val encrypted: String = BCrypt.hashpw(password, salt)
        return encrypted;
    }

    fun createAccount(accountName: String, password: String): AccountInfo? {
        if(findByUserName(accountName) != null && false) {
            return null
        } else {
            val newUser = AccountInfo(accountName, 0, hashPassword(password))
            jdbcTemplate.update("INSERT INTO accountInfo(userName, rating, passwordHash) VALUES ( ?, ?, ? )",
                newUser.userName, newUser.rating, newUser.passwordHash)
            return newUser
        }
    }

    fun findByUserName(userName: String): AccountInfo? {
        val accounts = jdbcTemplate.query(
                "SELECT userName, rating, passwordHash FROM accountInfo WHERE userName = ?",
                     rowMapper, userName)

        return if (accounts.isEmpty()) null
        else accounts[0]
    }

}