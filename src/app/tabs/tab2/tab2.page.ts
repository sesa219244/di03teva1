import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { INoticias } from 'src/app/interfaces/mis-interfaces';
import { GestionNoticiasService } from 'src/app/services/gestion-noticias.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public gestionNoticias: GestionNoticiasService,
    private alerta: AlertController) {}

    borrarNoticia(noticia: INoticias) {
      this.presentarAlerta(noticia);
    }

    async presentarAlerta(noticia: INoticias) {
      const alert = await this.alerta.create({
        backdropDismiss: false, // No permite hacer nada mas hasta contestar la alerta 
        header: 'Confirmar',
        message: 'Borrar noticia',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
                console.log('Confirm Cancel');
            }
          },
          {
            text: 'Okay',
            handler: () => {
              this.gestionNoticias.borrarNoticias(noticia);
            }
          }
        ]
      });
      await alert.present();
    }

}
