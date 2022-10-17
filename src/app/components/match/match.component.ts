import { Component, OnInit } from '@angular/core';
import { MatchesService } from 'src/app/services/matches.service';
import { Partido } from '../../interface/Partido';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.sass'],
})
export class MatchComponent implements OnInit {
  fechaActualString: string = '';
  partidos: Partido[] = [];

  constructor(private service: MatchesService) {}

  ngOnInit(): void {
    let fechaActual = new Date();
    this.fechaActualString = fechaActual.toLocaleDateString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    this.getMatches();
  }
  /**
   * Get matches from the service
   */
  getMatches(): void {
    this.service.getMatches().subscribe((data: Partido[]) => {
      this.partidos = data;
      console.log(data[0].hora);
    });
  }
}
