import {Component} from '@angular/core';
import {DataService} from '../../../service/data.service';
import {Table} from '../../../service/table';

@Component({
    moduleId:module.id,
    selector:'medico-psychiatry',
    templateUrl:'medico-psychiatry.component.html'
})

export class MedicoPsichiatryComponent {

    table:Table[] = [];
    selector:string = 'dispanser';

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