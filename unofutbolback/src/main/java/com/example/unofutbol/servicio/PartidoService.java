package com.example.unofutbol.servicio;

import com.example.unofutbol.modelo.Noticia;
import com.example.unofutbol.modelo.Partido;

import java.util.List;

public interface PartidoService {
  List<Partido> listarPartidos();
  List<Partido> listarPartidosPorLiga(String liga);
}
