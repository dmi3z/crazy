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
    TrustComponent,
    MedicoPsichiatryComponent,
    OrganizeMethodicComponent,
    PediatricComponent,
    PreborderComponent,
    PreborderCenterComponent,
    
    //Services Component
    AnalyzesComponent,
    MassageComponent,
    NarcologicalComponent,
    PsychotherapeuticComponent,
    PsychiatricComponent,
    SexologicalComponent,
    PsychologicalComponent,
    PhysiotherapyComponent,

    //Specialists Component
    RegulatoryBaseComponent,
    TrainingsComponent,
    ConferencesComponent,
    MethodicalMaterialsComponent,
    PreventionSuicideComponent
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
    },
    {
        path:"medico-psychiatry",
        component:MedicoPsichiatryComponent
    },
    {
        path:"organize-methodic",
        component:OrganizeMethodicComponent
    },
    {
        path:"pediatric",
        component:PediatricComponent
    },
    {
        path:"preborder",
        component:PreborderComponent
    },
    {
        path:"preborder-center",
        component:PreborderCenterComponent
    },
    {
        path:"analyzes",
        component:AnalyzesComponent
    },
    {
        path:"massage",
        component:MassageComponent
    },
    {
        path:"narcological",
        component:NarcologicalComponent
    },
    {
        path:"psychotherapeutic",
        component:PsychotherapeuticComponent
    },
    {
        path:"psychiatric",
        component:PsychiatricComponent
    },
    {
        path:"sexological",
        component:SexologicalComponent
    },
    {
        path:"psychological",
        component:PsychologicalComponent
    },
    {
        path:"physiotherapy",
        component:PhysiotherapyComponent
    },
    {
        path:"regulatory-base",
        component:RegulatoryBaseComponent
    },
    {
        path:"trainings",
        component:TrainingsComponent
    },
    {
        path:"conferences",
        component:ConferencesComponent
    },
    {
        path:"methodical-materials",
        component:MethodicalMaterialsComponent
    },
    {
        path:"prevention-suicide",
        component:PreventionSuicideComponent
    }
 ];