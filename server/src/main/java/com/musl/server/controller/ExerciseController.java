package com.musl.server.controller;

import com.musl.server.model.Exercise;
import com.musl.server.repository.ExerciseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping(path="/api/exercise")
public class ExerciseController {
    @Autowired
    private ExerciseRepository exerciseRepository;

    @PostMapping(path="/add")
    public @ResponseBody String addNewExercise (
            @RequestParam String title,
            @RequestParam String imageUrl,
            @RequestParam String description
    ) {
        Exercise exercise = new Exercise();
        exercise.setTitle(title);
        exercise.setImageUrl(imageUrl);
        exercise.setDescription(description);
        exerciseRepository.save(exercise);
        return "Saved";
    }

    @GetMapping(path="/all")
    public @ResponseBody Iterable<Exercise> getAllExercises() {
        return exerciseRepository.findAll();
    }
}