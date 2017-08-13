import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
    AdmissionComponent,
    CommonPsychiatryComponent,
    DailyComponent,
    DispanserComponent    
} from './index';

@NgModule({
    declarations:[
        AdmissionComponent,
        CommonPsychiatryComponent,
        DailyComponent,
        DispanserComponent
        ],
    imports:[CommonModule],
    exports:[
        AdmissionComponent,
        CommonPsychiatryComponent,
        DailyComponent,
        DispanserComponent
        ]
})

export class DepartmentModule{}