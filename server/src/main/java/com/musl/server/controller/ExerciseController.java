package com.musl.server.controller;

import com.musl.server.model.Exercise;
import com.musl.server.model.Template;
import com.musl.server.repository.ExerciseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping(path="/api/exercise")
public class ExerciseController {
    @Autowired
    private ExerciseRepository exerciseRepository;

    @PostMapping(path="/add")
    public @ResponseBody String addNewExercise (@RequestBody Exercise exercise) {
        Exercise newExercise = new Exercise();
        newExercise.setTitle(exercise.getTitle());
        newExercise.setImageUrl(exercise.getImageUrl());
        newExercise.setDescription(exercise.getDescription());
        exerciseRepository.save(newExercise);
        return "Saved";
    }

    @GetMapping(path="/all")
    public @ResponseBody Iterable<Exercise> getAllExercises() {
        return exerciseRepository.findAll();
    }
}