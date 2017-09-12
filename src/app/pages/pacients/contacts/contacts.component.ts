import {Component} from '@angular/core';
import {DataService} from '../../../service/data.service';
import {Table} from '../../../service/table';

@Component({
    moduleId:module.id,
    selector:'contacts',
    templateUrl:'contacts.component.html'
})

export class ContactsComponent {

    admin:Table[] = [];
    ambulator:Table[] = [];
    stacionar:Table[] = [];
    selector:string[] = ['Administartions','Ambulator_service','Stacionare_service'];

    constructor(private dataService:DataService){  
    }
    ngOnInit(){
        
            this.dataService.getData(this.selector[0]).subscribe(
                data=>this.admin =data,
                error => error,
                ()=>this.admin = this.admin);
            
            this.dataService.getSimpleData(this.selector[1]).subscribe(
                 data=>this.ambulator =data,
                 error => error,
                 ()=>this.ambulator = this.ambulator);

            this.dataService.getSimpleData(this.selector[2]).subscribe(
                data=>this.stacionar =data,
                error => error,
                ()=>this.stacionar = this.stacionar);        
        
    }
    
    loaderCheckAdmin(){
        while(this.admin.length<=0){
            return true;
        }
    }

    loaderCheckAmbulator(){
        while(this.ambulator.length<=0){
            return true;
        }
    }

    loaderCheckStacionar(){
        while(this.stacionar.length<=0){
            return true;
        }
    }
}