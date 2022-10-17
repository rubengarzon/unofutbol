import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/interface/Noticia';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.sass'],
})
export class NewsComponent implements OnInit {
  news: Noticia[] = [];
  mainNews!: Noticia;
  constructor(private service: NewsService) {}

  ngOnInit(): void {
    this.getNews();
    this.getMainNews(3);
  }

  getNews(): void {
    this.service.getNews().subscribe((data) => {
      data.forEach((element) => {
        let fechaNoticia = new Date(element.fecha);
        console.log(this.timeSince(fechaNoticia));
        element.fecha = this.timeSince(fechaNoticia);
        if (element.destacado == false) {
          this.news.push(element);
        }
      });
    });
  }

  getMainNews(id: number): void {
    this.service.getNewsById(id).subscribe((data) => {
      data.fecha = this.timeSince(new Date(data.fecha));
      this.mainNews = data;
    });
  }

  timeSince(date: Date) {
    var seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);

    var interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
      return 'hace ' + interval + ' años';
    } else if (interval == 1) {
      return 'hace ' + interval + ' año';
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return 'hace ' + interval + ' meses';
    } else if (interval == 1) {
      return 'hace ' + interval + ' mes';
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return 'hace ' + interval + ' dias';
    } else if (interval == 1) {
      return 'hace ' + interval + ' dia';
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return 'hace ' + interval + ' horas';
    } else if (interval == 1) {
      return 'hace ' + interval + ' hora';
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return 'hace ' + interval + ' minutos';
    } else if (interval == 1) {
      return 'hace ' + interval + ' minuto';
    }
    return Math.floor(seconds) + ' seconds';
  }
}
