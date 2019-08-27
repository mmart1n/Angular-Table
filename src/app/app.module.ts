import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { RowComponent } from './table/row/row.component';
import { CellComponent } from './table/row/cell/cell.component';
import { SortingService } from './table/services/sorting.service';
import { DataService } from './table/services/data.service';
import { HeaderRowComponent } from './table/header-row/header-row.component';
import { HeaderCellsComponent } from './table/header-row/header-cells/header-cells.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    CellComponent,
    RowComponent,
    HeaderRowComponent,
    HeaderCellsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService, SortingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
