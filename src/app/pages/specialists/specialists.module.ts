import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
    RegulatoryBaseComponent,
    TrainingsComponent,
    ConferencesComponent,
    MethodicalMaterialsComponent,
    PreventionSuicideComponent
} from './index';

@NgModule({
    declarations:[
        RegulatoryBaseComponent,
        TrainingsComponent,
        ConferencesComponent,
        MethodicalMaterialsComponent,
        PreventionSuicideComponent
    ],
    imports:[
        CommonModule
    ],
    exports:[
        RegulatoryBaseComponent,
        TrainingsComponent,
        ConferencesComponent,
        MethodicalMaterialsComponent,
        PreventionSuicideComponent
    ]
})

export class SpecialistsModule{}