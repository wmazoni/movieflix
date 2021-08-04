package com.devsuperior.movieflix.dto;

import com.devsuperior.movieflix.entities.Movie;

import java.io.Serializable;

public class MovieDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    private Long id;
    private String title;
    private String director;
    private Integer year;
    private String imgUrl;
    private String synopsis;

    public MovieDTO() {
    }

    public MovieDTO(Long id, String title, String director, Integer year, String imgUrl, String synopsis) {
        this.id = id;
        this.title = title;
        this.director = director;
        this.year = year;
        this.imgUrl = imgUrl;
        this.synopsis = synopsis;
    }

    public MovieDTO(Movie obj) {
        id = obj.getId();
        title = obj.getTitle();
        director = obj.getDirector();
        year = obj.getYear();
        imgUrl = obj.getImgUrl();
        synopsis = obj.getSynopsis();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDirector() {
        return director;
    }

    public void setDirector(String director) {
        this.director = director;
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public String getSynopsis() {
        return synopsis;
    }

    public void setSynopsis(String synopsis) {
        this.synopsis = synopsis;
    }
}
