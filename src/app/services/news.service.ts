import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Noticia } from '../interface/Noticia';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) {}

  getNews() {
    return this.http.get<Noticia[]>('http://localhost:8080/api/noticias');
  }

  getNewsById(id: number) {
    return this.http.get<Noticia>(`http://localhost:8080/api/noticias/${id}`);
  }
}
