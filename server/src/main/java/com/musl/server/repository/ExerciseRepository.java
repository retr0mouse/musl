package com.musl.server.repository;

import org.springframework.data.repository.CrudRepository;

import com.musl.server.model.Exercise;
import org.springframework.stereotype.Repository;

@Repository
public interface ExerciseRepository extends CrudRepository<Exercise, Long> {}
