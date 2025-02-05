package com.musl.server.repository;

import org.springframework.context.annotation.Bean;
import org.springframework.data.repository.CrudRepository;

import com.musl.server.model.Exercise;
import org.springframework.stereotype.Repository;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete
public interface ExerciseRepository extends CrudRepository<Exercise, Long> {}
