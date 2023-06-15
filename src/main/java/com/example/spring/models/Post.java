package com.example.spring.models;

import lombok.Data;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.time.Instant;


@Data
@Entity
@DynamicInsert
@DynamicUpdate
@Table(name = "post")

public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;


    @Column(name = "title")
    private String title;
    @Lob
    @Column(name = "content")
    private String content;
    @Column(name = "createdOn")
    private Instant createdOn;
    @Column(name = "updatedOn")
    private Instant updatedOn;
    @Column(name = "username")
    private String username;




}
