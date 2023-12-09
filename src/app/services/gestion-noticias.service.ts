import { Injectable } from '@angular/core';
import { INoticias } from '../interfaces/mis-interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GestionNoticiasService {
  
  private noticias: INoticias[] = [];
  public nuevasNoticias: INoticias[] = [];

  constructor(private leerFichero: HttpClient) { 
    this.getNoticiasFichero();
  }

  getNoticiasFichero() {
    let datosFichero: Observable<INoticias[]>;
    datosFichero = this.leerFichero.get<INoticias[]>("/assets/data/articulos.json");
    datosFichero.subscribe(datos => {
      console.log(datos);
      this.noticias.push(...datos)
      console.log(this.noticias)
    });
  }

  getNoticias() {
    return this.noticias;
  }

  guardarNoticias(noticia: INoticias) {
    this.nuevasNoticias.push(noticia);
    console.log(this.nuevasNoticias);
  }

  getNuevasNoticias() {
    return this.nuevasNoticias;
  }

  borrarNoticias(noticia: INoticias) {
    console.log(noticia);
    
    // Busca la noticia con el content dado
    //let noticiaEncontrada: INoticias | undefined = this.nuevasNoticias.find(function(unaNoticia) { return unaNoticia.title == title });
    let noticiaEncontrada: INoticias | undefined = this.nuevasNoticias.find(function(unaNoticia) { return unaNoticia == noticia });
    console.log(noticiaEncontrada)

    // Busca el índice de la noticia 
    let indice: number = -1;
    if (noticiaEncontrada == undefined) {}
    else {
      indice = this.nuevasNoticias.indexOf(noticiaEncontrada)
    };
    console.log(indice);

    // Borra la persona con el índice obtenido
    if (indice == -1) {}
    else {
      this.nuevasNoticias.splice(indice, 1)
    };
    console.log(this.nuevasNoticias);
  }

}
