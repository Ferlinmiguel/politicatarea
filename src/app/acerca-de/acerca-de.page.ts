import { Component } from '@angular/core';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.page.html',
  styleUrls: ['./acerca-de.page.scss'],
})
export class AcercaDePage {
  delegado = {
    foto: 'URL de la foto del delegado',
    nombre: 'Nombre del delegado',
    apellido: 'Apellido del delegado',
    matricula: 'Matrícula del delegado',
    frase: 'Frase relacionada con la democracia, las elecciones o el servicio cívico'
  };
}
