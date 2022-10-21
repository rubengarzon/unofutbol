package com.example.unofutbol.servicio;

import com.example.unofutbol.modelo.Clasificacion;
import com.example.unofutbol.modelo.Noticia;
import com.example.unofutbol.repositorio.ClasificacionRepositorio;
import com.example.unofutbol.repositorio.NoticiaRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class ClasificacionServiceImp implements ClasificacionService {
  @Autowired
  private ClasificacionRepositorio repositorio;

  @Override
  @Transactional(readOnly = true)
  public List<Clasificacion> listar() {
    return repositorio.findAll();
  }
}

