import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { RowComponent } from './table/row/row.component';
import { CellComponent } from './table/row/cell/cell.component';
import { HeadersComponent } from './table/headers/headers.component';
import { SortingService } from './table/services/sorting.service';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    CellComponent,
    RowComponent,
    HeadersComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [SortingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
