import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    moduleId:module.id,
    selector:'psychotherapeutic',
    templateUrl:'psychotherapeutic.component.html'
})

export class PsychotherapeuticComponent {
    constructor(private router:Router){}
    
        goTo(param){
            this.router.navigate([param]);
        }

}