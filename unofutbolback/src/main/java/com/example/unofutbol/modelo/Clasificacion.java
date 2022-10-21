package com.example.unofutbol.modelo;

import javax.persistence.*;

@Entity
@Table(name = "clasificacion")
public class Clasificacion {
  @Id
  @Column(name = "id")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;
  @Column(name = "posicion")
  private String posicion;
  @Column(name = "equipo")
  private String equipo;
  @Column(name = "equipo_img")
  private String equipo_img;
  @Column(name = "pj")
  private String pj;
  @Column(name = "g")
  private String g;
  @Column(name = "e")
  private String e;
  @Column(name = "p")
  private String p;
  @Column(name = "dg")
  private String dg;
  @Column(name = "pts")
  private String pts;

  // Getters and Setters
  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getPosicion() {
    return posicion;
  }

  public void setPosicion(String posicion) {
    this.posicion = posicion;
  }

  public String getEquipo() {
    return equipo;
  }

  public void setEquipo(String equipo) {
    this.equipo = equipo;
  }

  public String getEquipo_img() {
    return equipo_img;
  }

  public void setEquipo_img(String equipo_img) {
    this.equipo_img = equipo_img;
  }

  public String getPj() {
    return pj;
  }

  public void setPj(String pj) {
    this.pj = pj;
  }

  public String getG() {
    return g;
  }

  public void setG(String g) {
    this.g = g;
  }

  public String getE() {
    return e;
  }

  public void setE(String e) {
    this.e = e;
  }

  public String getP() {
    return p;
  }

  public void setP(String p) {
    this.p = p;
  }

  public String getDg() {
    return dg;
  }

  public void setDg(String dg) {
    this.dg = dg;
  }

  public String getPts() {
    return pts;
  }

  public void setPts(String pts) {
    this.pts = pts;
  }
}
