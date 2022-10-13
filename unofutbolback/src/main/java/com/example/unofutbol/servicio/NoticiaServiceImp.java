package com.example.unofutbol.servicio;

import com.example.unofutbol.modelo.Noticia;
import com.example.unofutbol.repositorio.NoticiaRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
@Service
public class NoticiaServiceImp implements NoticiaService {
  @Autowired
  private NoticiaRepositorio repositorio;

  @Override
  @Transactional(readOnly = true)
  public List<Noticia> listar() {
    return repositorio.findAll();
  }

}

