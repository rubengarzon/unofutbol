package com.example.unofutbol.repositorio;

import com.example.unofutbol.modelo.Clasificacion;
import com.example.unofutbol.modelo.Partido;
import org.springframework.data.repository.Repository;

import java.util.List;

public interface ClasificacionRepositorio extends Repository<Clasificacion, Integer> {
  List<Clasificacion> findAll();
}
