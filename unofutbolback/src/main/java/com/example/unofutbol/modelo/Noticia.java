package com.example.unofutbol.modelo;

import javax.persistence.*;

@Entity
@Table(name = "noticias")
public class Noticia {
  @Id
  @Column(name = "id")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;
  @Column(name = "titulo")
  private String titulo;
  @Column(name = "informacion")
  private String informacion;

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getTitulo() {
    return titulo;
  }

  public void setTitulo(String titulo) {
    this.titulo = titulo;
  }

  public String getInformacion() {
    return informacion;
  }

  public void setInformacion(String informacion) {
    this.informacion = informacion;
  }
}
