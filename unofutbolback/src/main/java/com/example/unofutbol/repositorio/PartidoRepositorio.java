package com.example.unofutbol.repositorio;

import com.example.unofutbol.modelo.Noticia;
import com.example.unofutbol.modelo.Partido;
import org.springframework.data.repository.Repository;

import java.util.List;

public interface PartidoRepositorio extends Repository<Partido, Integer> {
  List<Partido> findAll();
  List<Partido> findByLiga(String liga);




}
