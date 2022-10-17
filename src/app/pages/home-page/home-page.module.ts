import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { NewsComponent } from 'src/app/components/news/news.component';
import { NavbarModule } from '../../components/navbar/navbar.module';

@NgModule({
  declarations: [HomePageComponent, NewsComponent],
  imports: [CommonModule, HomePageRoutingModule, NavbarModule],
})
export class HomePageModule {}
