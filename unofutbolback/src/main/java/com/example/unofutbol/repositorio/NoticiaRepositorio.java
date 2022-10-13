package com.example.unofutbol.repositorio;

import com.example.unofutbol.modelo.Noticia;
import org.springframework.data.repository.Repository;

import java.util.List;

public interface NoticiaRepositorio extends Repository<Noticia, Integer> {
  List<Noticia> findAll();
}
