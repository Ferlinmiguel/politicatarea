import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.page.html',
  styleUrls: ['./add-event.page.scss'],
})
export class AddEventPage {
  id: string = '';
  titulo: string = '';
  fecha: Date = new Date();
  descripcion: string= '';
  foto!: string;
  audio: string = '';

  constructor(private modalController: ModalController) {}

  onAddEvent() {
    this.modalController.dismiss({
      titulo: this.titulo,
      fecha: this.fecha,
      descripcion: this.descripcion,
      foto: this.foto,
      audio: this.audio
    });
  }

  onPhotoSelected() {

  }

  onAudioSelected() {
   
}
}


