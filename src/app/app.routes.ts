import {Routes} from '@angular/router';
import {
    AdministrationComponent,
    EmergencyComponent,
    IndexComponent,
    HistoryComponent,
    AboutComponent,
    AppealsComponent,
    AdmissionComponent,
    CommonPsychiatryComponent,
    DailyComponent,
    DispanserComponent,
    AnonimComponent,
    TrustComponent
} from './pages/index';


 export const routes:Routes =[
     {
        path: "",
        redirectTo: "index",
        pathMatch: "full"
    },
    {
        path: "index",
        component: IndexComponent
    },
    {
        path:"administration",
        component: AdministrationComponent
    },
    {
        path:"emergency",
        component:EmergencyComponent
    },
    {
        path:"anonim",
        component:AnonimComponent
    },
    {
        path:"trust",
        component:TrustComponent
    },
    {
        path:"history",
        component: HistoryComponent
    },
    {
        path:"about",
        component:AboutComponent
    },
    {
        path:"appeals",
        component:AppealsComponent
    },
    {
        path:"admission",
        component:AdmissionComponent
    },
    {
        path:"common-psychiatry",
        component:CommonPsychiatryComponent
    },
    {
        path:"daily",
        component:DailyComponent
    },
    {
        path:"dispanser",
        component:DispanserComponent
    }

 ];