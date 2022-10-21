import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Clasificacion } from '../interface/Clasificacion';

@Injectable({
  providedIn: 'root',
})
export class TablesService {
  constructor(private http: HttpClient) {}
  /**
   * Get the table of a league
   * @returns  Clasificacion[]
   */
  getTable() {
    return this.http.get<Clasificacion[]>(
      'http://localhost:8080/api/clasificacion'
    );
  }
}
