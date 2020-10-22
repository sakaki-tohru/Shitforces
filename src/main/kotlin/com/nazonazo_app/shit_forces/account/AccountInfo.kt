package com.nazonazo_app.shit_forces.account

data class AccountInfo(
        val name: String,
        val rating: Int,
        val passwordHash: String) {

    private val authority = AccountAuthority.GENERAL
    private enum class AccountAuthority(auth: String) {
        GENERAL("GENERAL"),
        WRITER("WRITER"),
        ADMINISTER("ADMINISTER")
    }
}
