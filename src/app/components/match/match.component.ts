import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchesService } from 'src/app/services/matches.service';
import { Partido } from '../../interface/Partido';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.sass'],
})
export class MatchComponent implements OnInit {
  fechaActualString: string = '';
  partidosLaLiga: Partido[] = [];
  partidosPremier: Partido[] = [];
  jornadaLaLiga: number = 0;
  imgLaLiga: string = '';
  jornadaPremier: number = 0;
  imgPremier: string = '';

  constructor(private service: MatchesService, private router: Router) {}

  ngOnInit(): void {
    let fechaActual = new Date();
    this.fechaActualString = fechaActual.toLocaleDateString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    this.getMatchesByLiga('laliga');
    this.getMatchesByLiga('Premier League');
  }
  /**
   * @description get matches by league
   * @param liga string
   */
  getMatchesByLiga(liga: string): void {
    this.service.getMatchesByLiga(liga).subscribe((data: Partido[]) => {
      if (liga === 'laliga') {
        this.partidosLaLiga = data;
        this.jornadaLaLiga = data[0].jornada;
        this.imgLaLiga = data[0].liga_img;
      } else {
        this.partidosPremier = data;
        this.jornadaPremier = data[0].jornada;
        this.imgPremier = data[0].liga_img;
      }
    });
  }

  navigateToTables(liga: string): void {
    this.router.navigate(['/clasificacion', liga]);
  }
}
