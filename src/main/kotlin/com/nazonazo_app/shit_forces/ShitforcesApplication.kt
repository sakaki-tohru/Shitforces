package com.nazonazo_app.shit_forces

import org.springframework.boot.CommandLineRunner
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Bean
import org.springframework.jdbc.core.JdbcTemplate

@SpringBootApplication
class ShitforcesApplication {
    @Bean
    fun createContestInfoDataBase(jdbcTemplate: JdbcTemplate) = CommandLineRunner {
        jdbcTemplate.execute("""CREATE TABLE IF NOT EXISTS contestInfo (
    		name 	  INT	 PRIMARY KEY,
			startTime DATETIME    
			)""")
    }
    @Bean
    fun createAccountInfoDataBase(jdbcTemplate: JdbcTemplate) = CommandLineRunner {
        jdbcTemplate.execute("""CREATE TABLE IF NOT EXISTS accountInfo (
				name         CHAR    PRIMARY KEY,
				rating	     INT,
				passwordHash CHAR 
		)""")
    }
}

fun main(args: Array<String>) {
    runApplication<ShitforcesApplication>(*args)
}
