import { CommonModule } from '@angular/common';
import {  Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule],
  standalone: true
})
export class HomeComponent {

  downloadCV(fileName: string): void {
    const fileUrl = `/icons/${fileName}`;
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName; // Establece el nombre del archivo a descargar
    link.click(); // Simula el clic para iniciar la descarga
  }
}
