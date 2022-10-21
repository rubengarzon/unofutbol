package com.example.unofutbol.controlador;

import com.example.unofutbol.modelo.Clasificacion;
import com.example.unofutbol.modelo.Noticia;
import com.example.unofutbol.modelo.Partido;
import com.example.unofutbol.servicio.ClasificacionService;
import com.example.unofutbol.servicio.NoticiaService;
import com.example.unofutbol.servicio.PartidoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class Controlador {
  @Autowired
  NoticiaService service;
  @Autowired
  PartidoService servicePartido;
  @Autowired
  ClasificacionService serviceClasificacion;
  @GetMapping("/noticias")
  public List<Noticia> listar(){
    return service.listar();
  }
  @GetMapping("/noticias/{id}")
  public Noticia buscarPorId(@PathVariable("id")int id){
    return service.buscarPorId(id);
  }
  @GetMapping("/partidos")
  public List<Partido> listarPartidos(){
    return servicePartido.listarPartidos();
  }
  @GetMapping("/partidos/liga/{liga}")
  public List<Partido> listarPartidosPorLiga(@PathVariable("liga")String liga){
    return servicePartido.listarPartidosPorLiga(liga);
  }
  @GetMapping("/clasificacion")
  public List<Clasificacion> listarClasificacion(){
    return serviceClasificacion.listar();
  }
}
