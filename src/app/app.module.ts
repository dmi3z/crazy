import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {AboutModule} from './pages/about/about.module';

import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import {
  IndexComponent,  
  EmergencyComponent,  
} from './pages/index';

import {DataService} from './service/data.service';

import {routes} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    IndexComponent,    
    EmergencyComponent,   
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    AboutModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}