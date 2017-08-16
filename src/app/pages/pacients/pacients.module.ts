import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {
    ContactsComponent,
    HospitalizationComponent,
    InformationComponent,
    InnerRulesComponent,
    SchemeComponent
} from './index';

@NgModule({
    declarations:[
        ContactsComponent,
        HospitalizationComponent,
        InformationComponent,
        InnerRulesComponent,
        SchemeComponent
    ],
    imports:[
        CommonModule
    ],
    
    exports:[
        ContactsComponent,
        HospitalizationComponent,
        InformationComponent,
        InnerRulesComponent,
        SchemeComponent
    ]
})

export class PacientsModule{}