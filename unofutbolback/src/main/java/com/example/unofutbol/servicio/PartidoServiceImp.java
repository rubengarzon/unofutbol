package com.example.unofutbol.servicio;

import com.example.unofutbol.modelo.Partido;
import com.example.unofutbol.repositorio.PartidoRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class PartidoServiceImp implements PartidoService {
  @Autowired
  private PartidoRepositorio partidoRepositorio;


  @Override
  @Transactional(readOnly = true)
  public List<Partido> listarPartidos() {
    return partidoRepositorio.findAll();
  }
}
