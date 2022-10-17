import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Partido } from '../interface/Partido';

@Injectable({
  providedIn: 'root',
})
export class MatchesService {
  constructor(private http: HttpClient) {}
  /**
   * Get matches from the API
   * @returns Observable<Partido[]>
   */
  getMatches(): Observable<Partido[]> {
    return this.http.get<Partido[]>('http://localhost:8080/api/partidos');
  }
}
