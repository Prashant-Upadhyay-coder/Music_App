import { Routes } from '@angular/router';
import { LandingComponent } from './Pages/landing/landing.component';
import { LoginComponent } from './Pages/login/login.component';
import { MainComponent } from './Main/main/main.component';
import { HomeComponent } from './Pages/home/home.component';
import { MuPlayerComponent } from './Pages/mu-player/mu-player.component';

export const routes: Routes = [
    {path:'' ,component:LandingComponent},
    {path:'login' ,loadComponent:() =>
        import('./Pages/login/login.component').then(m => m.LoginComponent)
    },
    {
        path:'Uudo', component:MainComponent , children:[
            {path:'', redirectTo:'home',pathMatch:'full'},
            {path:'home',component:HomeComponent, title:'Home'},
            {path:'music',component:MuPlayerComponent,title:'Music ON'}
        ]
    }
];
