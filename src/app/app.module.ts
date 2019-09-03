import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { RowComponent } from './table/row/row.component';
import { CellComponent } from './table/row/cell/cell.component';
import { HeaderRowComponent } from './table/header-row/header-row.component';
import { HeaderCellsComponent } from './table/header-row/header-cells/header-cells.component';
import { SortingPipe } from './table/sorting.pipe';
import { PagingComponent } from './table/paging/paging.component';
import { PagingPipe } from './table/paging.pipe';
import { FilterRowComponent } from './table/filter-row/filter-row.component';
import { FilteringPipe } from './table/filtering.pipe';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    CellComponent,
    RowComponent,
    HeaderRowComponent,
    HeaderCellsComponent,
    SortingPipe,
    PagingPipe,
    PagingComponent,
    FilterRowComponent,
    FilteringPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
