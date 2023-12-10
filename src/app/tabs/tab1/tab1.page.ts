import { Component } from '@angular/core';
import { GestionNoticiasService } from 'src/app/services/gestion-noticias.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  // En el contructor creamos una variable gestionNoticias con el servicio GestionNoticiasService
  constructor(public gestionNoticias: GestionNoticiasService) {
  }

}
