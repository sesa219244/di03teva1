import { Injectable } from '@angular/core';
import { Article, INoticias } from '../interfaces/mis-interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GestionNoticiasService {
  
  // Creamos una variable noticias del tipo Array Article
  private noticias: Article[] = [];
  // Creamos una variable copiaNoticias del tipo INoticias para copiar las noticias del fichero JSON
  private copiaNoticias: INoticias | undefined;
  // Creamos una variable nuevasNoticias del tipo Array Article donde copiaremos las noticias seleccionadas
  private nuevasNoticias: Article[] = [];

  // En el contructor creamos una variable para leer el fichero JSON del tipo HttpClient
  constructor(private leerFichero: HttpClient) { 
    this.getNoticiasFichero();
  }

  // Creamos un metodo donde obtendremos las noticias del fichero JSON
  getNoticiasFichero() {
    // Creamos una variable Observable del tipo INoticias para recoger los datos del fichero JSON
    let datosFichero: Observable<INoticias>;
    // Leemos el fichero y lo almacenamos en la variable datosFIchero de tipo Observable
    datosFichero = this.leerFichero.get<INoticias>("/assets/data/articulos.json");
    // Subscribimos el observable a traves de una función con la variable datos
    datosFichero.subscribe(datos => {
      console.log("Información extraida del fichero JSON");
      console.log(datos);
      // Copiamos datos a la variable copiaNoticias de tipo INoticias
      this.copiaNoticias = datos;
      // Pasamos los datos del array articles a la variabl noticias de tipo Article
      this.noticias = this.copiaNoticias.articles;
      console.log("Información copiada en la variable noticias: Article[]");
      console.log(this.noticias)
    });
  }

  // Método para obtener el array de la variable noticias
  getNoticias() {
    return this.noticias;
  }

  // Método para guardar las noticias seleccionadas
  guardarNoticias(noticia: Article) {
    // Creamos una variable señal para controlar si ya se dispone de la noticia
    let señal: number = 0;
    
    // Se crea un bucle for para buscar la noticia en el Array nuevasNoticias
    for (let i = 0; i <= this.nuevasNoticias.length; i++) {
      if (this.nuevasNoticias[i] == noticia || señal == 1) {
        señal = 1}
    }

    // Si no se ha encontrado la noticia en el Array se da orden de agregarla
    if (señal == 0) {
      // Agregamos la noticia seleccionada en la variable Array nuevasNoticias
      this.nuevasNoticias.push(noticia);
    }
    console.log("Información copiada en la variable nuevasNoticias: Article[]");
    console.log(this.nuevasNoticias);
  }

  // Método para obtener el array de la variable nuevasNoticias
  getNuevasNoticias() {
    return this.nuevasNoticias;
  }

  // Método para borrar las noticias seleccionadas
  borrarNoticias(noticia: Article) {

    // Busca la noticia con el content dado
    let noticiaEncontrada: Article | undefined = this.nuevasNoticias.find(function(unaNoticia) { return unaNoticia == noticia });
    console.log("Noticia encontrada a borrarse");
    console.log(noticiaEncontrada)

    // Busca el índice de la noticia dada 
    let indice: number = -1;
    // Condicionamos para en el caso de que la noticiaEncontrada no esté undefined
    if (noticiaEncontrada == undefined) {}
    else {
      // Se devuelve el indice del primer elemento que coincide con la noticiaEncontrada
      indice = this.nuevasNoticias.indexOf(noticiaEncontrada)
    };
    console.log("Indice del Array: " + indice);

    // Borra la persona con el índice obtenido
    if (indice == -1) {}
    else {
       // Eliminamos la noticia del Array nuevasNoticias en función del índice dado 
      this.nuevasNoticias.splice(indice, 1)
    };
    console.log("Nuevo Array de nuevasNoticias");
    console.log(this.nuevasNoticias);
  }

}
