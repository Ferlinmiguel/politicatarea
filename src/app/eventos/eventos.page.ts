import { Component } from '@angular/core';
import{EventosService} from '../service/eventos.service'
import { ModalController } from '@ionic/angular';
import { AddEventPage } from '../add-event/add-event.page';
import { Evento } from '../model/evento.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage {
  eventos: Evento[] = [];


  constructor(private eventosService: EventosService, private modalController: ModalController, private router: Router) {}

  ionViewWillEnter() {
    this.eventos = this.eventosService.getEventos();
  }

  async onAddEvento() {
    const modal = await this.modalController.create({
      component: AddEventPage,
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.eventosService.addEvento(
          dataReturned.data.titulo,
          dataReturned.data.fecha,
          dataReturned.data.descripcion,
          dataReturned.data.foto,
          dataReturned.data.audio
        );
        this.eventos = this.eventosService.getEventos();
      }
    });

    return await modal.present();
  }

  onGoToDetail(eventoId: string) {
    this.router.navigate(['/eventos', eventoId]);
  }

  onDeleteAllEventos() {
    this.eventosService.deleteAllEventos();
    this.eventos = this.eventosService.getEventos();
  }

}
