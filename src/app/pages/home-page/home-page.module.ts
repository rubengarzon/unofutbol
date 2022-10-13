import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { NewsComponent } from 'src/app/components/news/news.component';

@NgModule({
  declarations: [HomePageComponent, NavbarComponent, NewsComponent],
  imports: [CommonModule, HomePageRoutingModule],
})
export class HomePageModule {}
