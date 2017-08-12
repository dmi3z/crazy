import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { AppealsComponent,AboutComponent,AdministrationComponent,HistoryComponent } from './index';


@NgModule({
  declarations: [
    AppealsComponent,
    AdministrationComponent,
    HistoryComponent,
    AboutComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AppealsComponent,
    AdministrationComponent,
    HistoryComponent,
    AboutComponent
  ]
})
export class AboutModule { }
