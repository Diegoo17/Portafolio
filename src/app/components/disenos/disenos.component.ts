import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-disenos',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './disenos.component.html',
  styleUrl: './disenos.component.css'
})
export class DisenosComponent {
   proyectos = [
    {
      nombre: 'Pizzeria La Mini',
      descripcion: 'Logo para la Pizzeria La Mini. Cuenta con mockups',
      imagenes: ['icons/lamini/logo.png', 'icons/lamini/2.png', 'icons/lamini/3.png', 'icons/lamini/4.png', 'icons/lamini/5.png', 'icons/lamini/6.png'],
      enlace: 'https://www.behance.net/gallery/218030119/The-Box-Burger'
    },
    {
      nombre: 'The Box',
      descripcion: 'Logo para la hamburguesería The Box. Cuenta con mockups',
      imagenes: ['icons/thebox/1.png', 'icons/thebox/2.png', 'icons/thebox/3.png', 'icons/thebox/4.png', 'icons/thebox/5.png', 'icons/thebox/6.png'],
      enlace: 'https://www.behance.net/gallery/218101385/Pizzeria-La-Mini'
    },
    {
      nombre: 'Interfaz de Usuario',
      descripcion: 'Interfaz de usuario para una página de una tienda de ropa. Cuenta con diseño responsive',
      imagenes: ['icons/userInterface/USER INTERFACE (1).png', 'icons/userInterface/USER INTERFACE (2).png', 'icons/userInterface/USER INTERFACE (3).png'],
      enlace: 'https://www.behance.net/gallery/220225333/UI-Interface'
    }
  ];

  imagenesProyecto: string[] = [];
  mostrarModal = false;
  indiceImagen = 0;

  abrirGaleria(imagenes: string[]) {
    this.imagenesProyecto = imagenes;
    this.indiceImagen = 0;
    this.mostrarModal = true;
  }

  cerrarGaleria() {
    this.mostrarModal = false;
  }

  siguienteImagen() {
    this.indiceImagen = (this.indiceImagen + 1) % this.imagenesProyecto.length;
  }

  anteriorImagen() {
    this.indiceImagen = (this.indiceImagen - 1 + this.imagenesProyecto.length) % this.imagenesProyecto.length;
  }
}
