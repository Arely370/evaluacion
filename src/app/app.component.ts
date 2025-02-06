import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { FormsModule } from '@angular/forms';   // Importa FormsModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  libro = {
    id: 0,
    titulo: '',
    autor: '',
    precio: 0
  };

  libros = [
    { id: 1, titulo: 'Los compas y el diamantito legendario', autor: 'Mikecrack, Eltrollino y TimbaVK', precio: 479 },
    { id: 2, titulo: 'Escuela RaptorGamer: El felino infiltrado', autor: 'Raptorgamer', precio: 399 },
    { id: 3, titulo: 'RiusPlay: Y el hechizo de la luna llena', autor: 'Riusplay', precio: 250 }
  ];

  agregarLibro() {
    if (this.libro.id === 0) {
      alert('El ID debe ser diferente a cero');
      return;
    }

    // Verificamos que el ID no sea repetido
    for (let i = 0; i < this.libros.length; i++) {
      if (this.libro.id === this.libros[i].id) {
        alert('Ya existe un libro con ese ID');
        return;
      }
    }

    // Agregamos el libro al arreglo
    this.libros.push({
      id: this.libro.id,
      titulo: this.libro.titulo,
      autor: this.libro.autor,
      precio: this.libro.precio
    });

    // Reseteamos el objeto libro
    this.libro.id = 0;
    this.libro.titulo = '';
    this.libro.autor = '';
    this.libro.precio = 0;
  }

  // Función para seleccionar un libro existente
  seleccionarLibro(libroSeleccionado: { id: number; titulo: string; autor: string; precio: number }) {
    this.libro.id = libroSeleccionado.id;
    this.libro.titulo = libroSeleccionado.titulo;
    this.libro.autor = libroSeleccionado.autor;
    this.libro.precio = libroSeleccionado.precio;
  }

  // Función para modificar un libro existente
  modificarLibro() {
    for (let i = 0; i < this.libros.length; i++) {
      if (this.libro.id === this.libros[i].id) {
        this.libros[i].titulo = this.libro.titulo;
        this.libros[i].autor = this.libro.autor;
        this.libros[i].precio = this.libro.precio;

        // Reseteamos el objeto libro
        this.libro.id = 0;
        this.libro.titulo = '';
        this.libro.autor = '';
        this.libro.precio = 0;
        return;
      }
    }
    alert('No existe un libro con ese ID');
  }

  // Función para eliminar un libro del arreglo
  eliminarLibro(id: number) {
    for (let i = 0; i < this.libros.length; i++) {
      if (id === this.libros[i].id) {
        this.libros.splice(i, 1);
        return;
      }
    }
    alert('No existe un libro con ese ID');
  }
}                                                                                                                                                                                                                                                                                                                        