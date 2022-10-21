import { Component, OnInit } from '@angular/core';
import { TablesService } from '../../services/tables.service';
import { Clasificacion } from '../../interface/Clasificacion';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass'],
})
export class TableComponent implements OnInit {
  ligaSubscription!: Subscription;
  clasificacion: Clasificacion[] = [];

  constructor(private tablesService: TablesService) {}

  ngOnInit(): void {
    this.ligaSubscription = this.tablesService.getTable().subscribe((data) => {
      this.clasificacion = data;
    });
  }
}
