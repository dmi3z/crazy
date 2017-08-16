import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {AboutModule} from './pages/about/about.module';
import {DepartmentModule} from './pages/department/department.module';
import {ServicesModule} from './pages/services/services.module';
import {SpecialistsModule} from './pages/specialists/specialists.module';
import {PacientsModule} from './pages/pacients/pacients.module';

import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import {
  IndexComponent,  
  EmergencyComponent, 
  AnonimComponent,
  TrustComponent 
} from './pages/index';

import {DataService} from './service/data.service';

import {routes} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    IndexComponent,    
    EmergencyComponent,
    AnonimComponent,
    TrustComponent  
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    AboutModule,
    DepartmentModule,
    ServicesModule,
    SpecialistsModule,
    PacientsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}