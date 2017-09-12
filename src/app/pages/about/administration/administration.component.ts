import {Component,OnInit} from '@angular/core';
import {DataService} from '../../../service/data.service';
import {Table} from '../../../service/table';

@Component({
    moduleId:module.id,
    selector:'administration',
    templateUrl:'administration.component.html'
})


export class AdministrationComponent implements OnInit{

    table:Table[] = [];
    selector:string = 'Administartions';

    constructor(private dataService:DataService){  
    }
    ngOnInit(){
        this.dataService.getData(this.selector).subscribe(
            data=>this.table =data,
            error => error,
            ()=>this.table = this.table);
    }
    loaderCheck(){
        while(this.table.length<=0){
            return true;
        }
    }
}