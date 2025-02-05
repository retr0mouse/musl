package com.musl.server;

import com.musl.server.model.Exercise;
import com.musl.server.repository.ExerciseRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class ServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(ServerApplication.class, args);
		System.out.println("Hello World");
	}

	@Bean
	public CommandLineRunner run(ExerciseRepository repository) {
		return (args -> {
			insertExercises(repository);
			System.out.println(repository.findAll());
		});
	}

	private void insertExercises(ExerciseRepository repository) {
		repository.save(new Exercise("Bench Press", "no image", "no description"));
	}}
