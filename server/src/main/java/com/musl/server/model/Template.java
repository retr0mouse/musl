package com.musl.server.model;

import jakarta.persistence.*;

import java.util.Set;

@Entity
public class Template {
    @Id
    @GeneratedValue
    private Long id;

    private String title;

    private String notes;

    @ManyToMany
    @JoinTable(
            name = "exercise_in_template",
            joinColumns = @JoinColumn(name = "template_id"),
            inverseJoinColumns = @JoinColumn(name = "exercise_id")
    )
    Set<Exercise> exercises;

    public Set<Exercise> getExercises() {
        return exercises;
    }

    public void setExercises(Set<Exercise> exercises) {
        this.exercises = exercises;
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public Template(Long id, String title, String notes) {
        this.id = id;
        this.title = title;
        this.notes = notes;
    }

    public Template() {
    }
}
