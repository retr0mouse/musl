package com.musl.server.model;

import jakarta.persistence.*;

import java.util.Set;

@Entity
public class Exercise {
    @Id
    @GeneratedValue
    private Long id;

    private String title;

    private String imageUrl;

    private String description;

    @ManyToMany(mappedBy = "exercises")
    Set<Template> templates;

    public Set<Template> getTemplates() {
        return templates;
    }

    public void setTemplates(Set<Template> templates) {
        this.templates = templates;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
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

    public Exercise(String title, String imageUrl, String description) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
    }

    public Exercise() {
    }
}