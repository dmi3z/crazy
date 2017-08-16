import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    moduleId:module.id,
    selector:'narcological',
    templateUrl:'narcological.component.html'
})

export class NarcologicalComponent {

    constructor(private router:Router){}
    
        goTo(param){
            this.router.navigate([param]);
        }

}