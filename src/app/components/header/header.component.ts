import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ProjectsComponent } from '../projects/projects.component';
import { AboutComponent } from '../about/about.component';
import { ContactoComponent } from '../contacto/contacto.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, HomeComponent, ProjectsComponent, AboutComponent, ContactoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
