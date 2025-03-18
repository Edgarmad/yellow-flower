import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'yellow-flower';
  showPopup = false;
  dibujarFlores() {
    const lluviaFlores = document.getElementById('lluviaFlores');
    if (lluviaFlores) {
      for (let i = 0; i < 1; i++) { // Esto puede cambiar, el número de flores que llueven
        const flower = document.createElement('img');
        flower.src = '/flores-placeholder.png'; // Ruta relativa del archivo PNG
        flower.classList.add('flor'); // Añadir una clase para aplicar estilos
        flower.style.position = 'absolute';
        flower.style.left = `${Math.random() * 100}vw`; // Posición aleatoria en el ancho de la pantalla
        flower.style.animation = `caer ${Math.random() * 2 + 3}s linear infinite`; // Tiempo de caída aleatorio
        lluviaFlores.appendChild(flower);
      }
    }
    setTimeout(() => {
      this.showPopup = true;
    }, 5000);
  }
  cerrarPopup() {
    this.showPopup = false;
  }
}