import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AboutComponent } from './components/about/about.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { DisenosComponent } from './components/disenos/disenos.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: '/Portafolio/', component: HomeComponent},
    {path: '/Portafolio/projects', component: ProjectsComponent},
    {path: '/Portafolio/about' ,component: AboutComponent},
    {path: '/Portafolio/contact', component: ContactoComponent},
    {path: '/Portafolio/designs', component: DisenosComponent},

    {path: '**', redirectTo: ''}

];
