package com.nazonazo_app.shit_forces.account

import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.jdbc.core.RowMapper
import org.springframework.security.crypto.bcrypt.BCrypt
import org.springframework.stereotype.Repository

@Repository
class AccountsInfoRepository(private val jdbcTemplate: JdbcTemplate) {
    private val rowMapper = RowMapper<AccountInfo> { rs, _ ->
        AccountInfo(rs.getString("name"), rs.getInt("rating"), rs.getString("passwordHash"))
    }
    fun findAll(): List<AccountInfo> =
            jdbcTemplate.query("SELECT name, rating, passwordHash FROM accountInfo", rowMapper)

    private fun hashPassword(password: String): String {
        val salt: String = BCrypt.gensalt()
        val encrypted: String = BCrypt.hashpw(password, salt)
        return encrypted
    }

    fun createAccount(accountName: String, password: String): AccountInfo? {
        if (findByAccountName(accountName) != null && false) {
            return null
        } else {
            val newAccount = AccountInfo(accountName, 0, hashPassword(password))
            jdbcTemplate.update("INSERT INTO accountInfo(name, rating, passwordHash) VALUES ( ?, ?, ? )",
                newAccount.name, newAccount.rating, newAccount.passwordHash)
            return newAccount
        }
    }

    fun findByAccountName(accountName: String): AccountInfo? {
        val accounts = jdbcTemplate.query(
                "SELECT name, rating, passwordHash FROM accountInfo WHERE name = ?",
                     rowMapper, accountName)

        return if (accounts.isEmpty()) null
        else accounts[0]
    }
}
