import {Component} from '@angular/core';
import {DataService} from '../../../service/data.service';
import {Table} from '../../../service/table';

@Component({
    moduleId:module.id,
    selector:'pediatric',
    templateUrl:'pediatric.component.html'
})

export class PediatricComponent {
    
    table:Table[] = [];
    selector:string = 'pediatric';

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