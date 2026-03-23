import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Error404Component } from './pages/error404/error404.component';
import { VistaUsuarioComponent } from './pages/vista-usuario/vista-usuario.component';
import { NuevoUsuarioComponent } from './pages/nuevo-usuario/nuevo-usuario.component';
import { ActualizaUsuarioComponent } from './pages/actualiza-usuario/actualiza-usuario.component';

export const routes: Routes = [
    {path: "", pathMatch: 'full', component: HomeComponent},
    {path: "home", component: HomeComponent},
    {path: "vista-usuario/:_id", component: VistaUsuarioComponent},
    {path: "actualiza-usuario/:_id", component: ActualizaUsuarioComponent},
    {path: "nuevo-usuario", component:NuevoUsuarioComponent},
    {path:"**", component: Error404Component}
];
