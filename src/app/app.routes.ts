import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Error404Component } from './pages/error404/error404.component';

export const routes: Routes = [
    {path: "", pathMatch: 'full', component: HomeComponent},
    {path: "home", component: HomeComponent},
    {path:"**", component: Error404Component}
];
