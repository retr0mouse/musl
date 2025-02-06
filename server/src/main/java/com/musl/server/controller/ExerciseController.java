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

    @PostMapping(path="/add") // Map ONLY POST Requests
    public @ResponseBody String addNewExercise (@RequestParam String title
            , @RequestParam String imageUrl, @RequestParam String description) {
        // @ResponseBody means the returned String is the response, not a view name
        // @RequestParam means it is a parameter from the GET or POST request

        Exercise exercise = new Exercise();
        exercise.setTitle(title);
        exercise.setImageUrl(imageUrl);
        exercise.setDescription(description);
        exerciseRepository.save(exercise);
        return "Saved";
    }

    @GetMapping(path="/all")
    public @ResponseBody Iterable<Exercise> getAllExercises() {
        // This returns a JSON or XML with the users
        return exerciseRepository.findAll();
    }
}