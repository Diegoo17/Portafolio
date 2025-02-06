import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AboutComponent } from './components/about/about.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { DisenosComponent } from './disenos/disenos.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'about' ,component: AboutComponent},
    {path: 'contact', component: ContactoComponent},
    {path: 'designs', component: DisenosComponent},

    {path: '**', redirectTo: ''}

];
