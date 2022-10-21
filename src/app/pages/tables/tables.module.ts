import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { TablesComponent } from './tables.component';
import { NavbarModule } from '../../components/navbar/navbar.module';
import { TableModule } from '../../components/table/table.module';

@NgModule({
  declarations: [TablesComponent],
  imports: [CommonModule, TablesRoutingModule, NavbarModule, TableModule],
})
export class TablesModule {}
