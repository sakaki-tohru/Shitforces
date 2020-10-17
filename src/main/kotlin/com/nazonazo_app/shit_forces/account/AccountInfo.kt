package com.nazonazo_app.shit_forces.account

data class AccountInfo(
    val userName: String,
    val rating: Int,
    val passwordHash: String) {

    private val authority = AccountAuthority.GENERAL
    private enum class AccountAuthority { GENERAL, WRITER, ADMINISTER }
}
