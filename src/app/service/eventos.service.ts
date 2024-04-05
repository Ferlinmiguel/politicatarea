import { Injectable } from '@angular/core';
import { Evento } from '../model/evento.model';

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  [x: string]: any;
  private eventos: Evento[] = [];

  getEventos() {
    return [...this.eventos];
  }

  addEvento(titulo: string, fecha: Date, descripcion: string, foto: string, audio: string) {
    const ev = new Evento();
    ev.titulo = titulo;
    ev.fecha = fecha;
    ev.descripcion = descripcion;
    ev.foto = foto;
    ev.audio = audio;
    this.eventos.push(ev);
  }

  deleteAllEventos() {
    this.eventos = [];
  }

}
