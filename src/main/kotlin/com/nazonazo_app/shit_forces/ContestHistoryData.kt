package com.nazonazo_app.shit_forces

data class ContestHistoryData(
        val accountId: Int,
        val index: Int,
        val ranking: Int,
        val resultRate: Int,
        val changeFromOriginalRate: Int
)
