package com.musl.server.controller;

import com.musl.server.model.Template;
import com.musl.server.repository.TemplateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping(path = "/api/template")
public class TemplateController {
    @Autowired
    private TemplateRepository templateRepository;

    @PostMapping(path = "/add")
    public @ResponseBody String addNewTemplate(@RequestBody Template template) {
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