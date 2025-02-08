package com.musl.server.controller;

import com.musl.server.model.Exercise;
import com.musl.server.model.Template;
import com.musl.server.repository.ExerciseRepository;
import com.musl.server.repository.TemplateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping(path = "/api/template")
public class TemplateController {
    @Autowired
    private TemplateRepository templateRepository;

    @Autowired
    private ExerciseRepository exerciseRepository;

    @PostMapping(path = "/add")
    public @ResponseBody String addNewTemplate(@RequestBody Template template) {
        Template newTemplate = new Template();
        newTemplate.setTitle(template.getTitle());
        newTemplate.setNotes(template.getNotes());
        templateRepository.save(newTemplate);
        return "Saved";
    }

    @PostMapping(path = "/addExercise")
    public @ResponseBody String addExerciseToTemplate(
            @RequestParam Long templateId,
            @RequestParam Long exerciseId
    ) {
        Template template = templateRepository.findById(templateId)
                .orElseThrow();
        Exercise exercise = exerciseRepository.findById(exerciseId)
                .orElseThrow();
        Template newTemplate = new Template();
        newTemplate.setTitle(template.getTitle());
        newTemplate.setNotes(template.getNotes());
        templateRepository.save(newTemplate);
        return "Saved";
    }

    @GetMapping(path = "/all")
    public @ResponseBody Iterable<Template> getAllTemplates() {
        return templateRepository.findAll();
    }
}