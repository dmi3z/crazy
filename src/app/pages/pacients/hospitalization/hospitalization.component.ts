import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    moduleId:module.id,
    selector:'hospitalization',
    templateUrl:'hospitalization.component.html'
})

export class HospitalizationComponent {

    constructor(private router:Router){}

    goTo(param){
        this.router.navigate([param]);
    }
}