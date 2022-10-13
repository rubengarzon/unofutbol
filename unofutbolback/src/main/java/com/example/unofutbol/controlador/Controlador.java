package com.example.unofutbol.controlador;

import com.example.unofutbol.modelo.Noticia;
import com.example.unofutbol.servicio.NoticiaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class Controlador {
  @Autowired
  NoticiaService service;
  @GetMapping("/noticias")
  public List<Noticia> listar(){
    return service.listar();
  }
}
