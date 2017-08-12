import { Component } from '@angular/core';
//import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {DataService} from './service/data.service';
import {Product} from './service/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private dataService:DataService){}
  
  product:Product[];

  ngOnInit(){
    console.log("NgOnInit complete!");
    this.dataService.getData().subscribe(data=>this.product=data);
  }

}
