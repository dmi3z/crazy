import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { 
    AnalyzesComponent,
    MassageComponent,
    NarcologicalComponent,
    PsychotherapeuticComponent,
    PsychiatricComponent,
    SexologicalComponent,
    PsychologicalComponent,
    PhysiotherapyComponent
} from './index';

@NgModule({
    declarations:[
        AnalyzesComponent,
        MassageComponent,
        NarcologicalComponent,
        PsychotherapeuticComponent,
        PsychiatricComponent,
        SexologicalComponent,
        PsychologicalComponent,
        PhysiotherapyComponent     
    ],
    imports:[CommonModule],
    exports:[
        AnalyzesComponent,
        MassageComponent,
        NarcologicalComponent,
        PsychotherapeuticComponent,
        PsychiatricComponent,
        SexologicalComponent,
        PsychologicalComponent,
        PhysiotherapyComponent
        ]
})

export class ServicesModule{}