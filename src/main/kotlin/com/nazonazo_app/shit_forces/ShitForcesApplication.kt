package com.nazonazo_app.shit_forces

import org.springframework.boot.CommandLineRunner
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Bean
import org.springframework.jdbc.core.JdbcTemplate

@SpringBootApplication
class ShitForcesApplication {
    @Bean
	fun createContestInfoDataBase(jdbcTemplate: JdbcTemplate) = CommandLineRunner {
		jdbcTemplate.execute("""CREATE TABLE IF NOT EXISTS contestInfo (
    		name 	  INT	 PRIMARY KEY,
			startTime CHAR    
			)""")
	}
}

fun main(args: Array<String>) {
	runApplication<ShitForcesApplication>(*args)
}
