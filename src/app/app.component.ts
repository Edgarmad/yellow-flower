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
    const imagenesFlores = ['flower_0.png', 'flower_1.png', 'flower_2.png', 'flower_3.png']; // Lista de imágenes
  
    if (lluviaFlores) {
      const cantidadFlores = 30; // Número total de flores
      const intervalo = 200; // Tiempo en ms entre cada flor
  
      for (let i = 0; i < cantidadFlores; i++) {
        setTimeout(() => {
          const flower = document.createElement('img');
          const imagenAleatoria = imagenesFlores[Math.floor(Math.random() * imagenesFlores.length)];
          flower.src = `/${imagenAleatoria}`;
          flower.style.position = 'fixed';
          flower.style.left = `${Math.random() * 100}vw`;
          flower.style.top = `${-10 - Math.random() * 20}vh`;
          const size = `${Math.random() * 1 + 5}rem`; 
          flower.style.width = size;
          flower.style.height = size;
  
          // Animacion de caída
          flower.style.animation = `caer ${Math.random() * 3 + 2}s linear forwards`;
          lluviaFlores.appendChild(flower);
  
          setTimeout(() => {
            flower.remove();
          }, 15000);
        }, i * intervalo);
      }
    }
  
    // Mostrar el popup después de 5 segundos
    setTimeout(() => {
      this.showPopup = true;
    }, 5000);
  }
  
  
  cerrarPopup() {
    this.showPopup = false;
  }
}