import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventosService } from '../service/eventos.service';
import { Evento } from '../model/evento.model';

@Component({
  selector: 'app-evento-detalle',
  templateUrl: './evento-detalle.page.html',
  styleUrls: ['./evento-detalle.page.scss'],
})
export class EventoDetallePage implements OnInit {
  evento: Evento = new Evento();

  constructor(private activatedRoute: ActivatedRoute, private eventosService: EventosService) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('eventoId')) {
        // Redirigir al usuario
        return;
      }
      const eventoId = paramMap.get('eventoId');
      this.evento = this.eventosService['getEvento'](eventoId);
    });
  }
}
