import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchesRoutingModule } from './matches-routing.module';
import { MatchesComponent } from './matches.component';
import { NavbarModule } from '../../components/navbar/navbar.module';
import { MatchModule } from '../../components/match/match.module';

@NgModule({
  declarations: [MatchesComponent],
  imports: [CommonModule, MatchesRoutingModule, NavbarModule, MatchModule],
})
export class MatchesModule {}
