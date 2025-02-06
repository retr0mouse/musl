package com.musl.server.repository;

import org.springframework.data.repository.CrudRepository;

import com.musl.server.model.Exercise;
import org.springframework.stereotype.Repository;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete
@Repository
public interface ExerciseRepository extends CrudRepository<Exercise, Long> {}
