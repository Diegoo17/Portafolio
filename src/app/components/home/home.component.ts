import { CommonModule } from '@angular/common';
import {  Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { ContactoComponent } from '../contacto/contacto.component';
import { DisenosComponent } from '../disenos/disenos.component';
import { ProjectsComponent } from '../projects/projects.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, AboutComponent, ContactoComponent, DisenosComponent, ProjectsComponent],
  standalone: true
})
export class HomeComponent {

  downloadCV(fileName: string): void {
    const fileUrl = `/icons/${fileName}`;
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName; 
    link.click(); 
  }
}
