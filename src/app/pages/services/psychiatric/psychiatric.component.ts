import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    moduleId:module.id,
    selector:'psychiatric',
    templateUrl:'psychiatric.component.html'
})

export class PsychiatricComponent {
    constructor(private router:Router){}
    
        goTo(param){
            this.router.navigate([param]);
        }
}