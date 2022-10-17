import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Noticia } from '../interface/Noticia';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) {}
  /**
   * Get news from the API
   * @returns Observable<Noticia[]>
   */
  getNews(): Observable<Noticia[]> {
    return this.http.get<Noticia[]>('http://localhost:8080/api/noticias');
  }
  /**
   * Get news by id from the API
   * @param id  id of the news
   * @returns Observable<Noticia>
   */
  getNewsById(id: number): Observable<Noticia> {
    return this.http.get<Noticia>(`http://localhost:8080/api/noticias/${id}`);
  }
}
