import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
    AdmissionComponent,
    CommonPsychiatryComponent,
    DailyComponent,
    DispanserComponent,
    MedicoPsichiatryComponent,
    OrganizeMethodicComponent,
    PediatricComponent,
    PreborderComponent,
    PreborderCenterComponent   
} from './index';

@NgModule({
    declarations:[
        AdmissionComponent,
        CommonPsychiatryComponent,
        DailyComponent,
        DispanserComponent,
        MedicoPsichiatryComponent,
        OrganizeMethodicComponent,
        PediatricComponent,
        PreborderComponent,
        PreborderCenterComponent
        ],
    imports:[CommonModule],
    exports:[
        AdmissionComponent,
        CommonPsychiatryComponent,
        DailyComponent,
        DispanserComponent,
        MedicoPsichiatryComponent,
        OrganizeMethodicComponent,
        PediatricComponent,
        PreborderComponent,
        PreborderCenterComponent
        ]
})

export class DepartmentModule{}