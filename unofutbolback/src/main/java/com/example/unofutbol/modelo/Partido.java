package com.example.unofutbol.modelo;

import javax.persistence.*;

@Entity
@Table(name = "partidos")
public class Partido {
  @Id
  @Column(name = "id")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;
  @Column(name = "liga")
  private String liga;
  @Column(name = "liga_img")
  private String liga_img;
  @Column(name = "jornada")
  private int jornada;
  @Column(name = "equipo_local")
  private String equipo_local;
  @Column(name = "equipo_local_img")
  private String equipo_local_img;
  @Column(name = "equipo_visitante")
  private String equipo_visitante;
  @Column(name = "equipo_visitante_img")
  private String equipo_visitante_img;
  @Column(name = "hora")
  private String hora;

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getLiga() {
    return liga;
  }

  public void setLiga(String liga) {
    this.liga = liga;
  }

  public String getLiga_img() {
    return liga_img;
  }

  public void setLiga_img(String liga_img) {
    this.liga_img = liga_img;
  }

  public int getJornada() {
    return jornada;
  }

  public void setJornada(int jornada) {
    this.jornada = jornada;
  }

  public String getEquipo_local() {
    return equipo_local;
  }

  public void setEquipo_local(String equipo_local) {
    this.equipo_local = equipo_local;
  }

  public String getEquipo_local_img() {
    return equipo_local_img;
  }

  public void setEquipo_local_img(String equipo_local_img) {
    this.equipo_local_img = equipo_local_img;
  }

  public String getEquipo_visitante() {
    return equipo_visitante;
  }

  public void setEquipo_visitante(String equipo_visitante) {
    this.equipo_visitante = equipo_visitante;
  }

  public String getEquipo_visitante_img() {
    return equipo_visitante_img;
  }

  public void setEquipo_visitante_img(String equipo_visitante_img) {
    this.equipo_visitante_img = equipo_visitante_img;
  }

  public String getHora() {
    return hora;
  }

  public void setHora(String hora) {
    this.hora = hora;
  }
}
