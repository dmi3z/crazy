import {Routes} from '@angular/router';
import {
    AdministrationComponent,
    EmergencyComponent,
    IndexComponent,
    HistoryComponent,
    AboutComponent,
    AppealsComponent
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
    }
 ];