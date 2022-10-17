import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchesRoutingModule } from './matches-routing.module';
import { MatchesComponent } from './matches.component';
import { NavbarModule } from '../../components/navbar/navbar.module';

@NgModule({
  declarations: [MatchesComponent],
  imports: [CommonModule, MatchesRoutingModule, NavbarModule],
})
export class MatchesModule {}
