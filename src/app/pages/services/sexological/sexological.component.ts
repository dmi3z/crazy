import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    moduleId:module.id,
    selector:'sexological',
    templateUrl:'sexological.component.html'
})

export class SexologicalComponent {
    constructor(private router:Router){}
    
        goTo(param){
            this.router.navigate([param]);
        }
}