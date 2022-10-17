import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatchComponent } from './match.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [MatchComponent],
  imports: [RouterModule, CommonModule],
  exports: [MatchComponent],
})
export class MatchModule {}
