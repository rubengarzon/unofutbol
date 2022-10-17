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
  @Column(name = "destacado")
  private Boolean destacado;
  @Column(name = "imagen")
  private String imagen;
  @Column(name = "fecha")
  private String fecha;
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

  public Boolean getDestacado() {
    return destacado;
  }

  public void setDestacado(Boolean destacado) {
    this.destacado = destacado;
  }

  public String getImagen() {
    return imagen;
  }

  public void setImagen(String imagen) {
    this.imagen = imagen;
  }

  public String getFecha() {
    return fecha;
  }

  public void setFecha(String fecha) {
    this.fecha = fecha;
  }
}
