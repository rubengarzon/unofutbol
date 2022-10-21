import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { Clasificacion } from '../../interface/Clasificacion';
import { TablesService } from '../../services/tables.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.sass'],
})
export class TablesComponent implements OnInit {
  liga: string = '';
  ligaSubscription!: Subscription;
  tableSubscription!: Subscription;
  clasificacion: Clasificacion[] = [];

  constructor(
    private route: ActivatedRoute,
    private tablesService: TablesService
  ) {}

  ngOnInit(): void {
    /* this.ligaSubscription = */ this.route.params.subscribe((params) => {
      this.liga = params['liga'];
    });
    /* this.ligaSubscription = */ this.tablesService
      .getTable()
      .subscribe((data) => {
        this.clasificacion = data;
      });
  }

  ngOnDestroy(): void {
    /* this.ligaSubscription.unsubscribe();
    this.tableSubscription.unsubscribe(); */
  }
}
