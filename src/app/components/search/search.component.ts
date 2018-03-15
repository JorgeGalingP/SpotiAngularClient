import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {
    //El Subscribe aqui tiene que estar despejado o con logica del search solo, como un loading

    // La búsqueda del usuario se guardara en este string
    termino:string ="";

    // Inyeccion del servicio al componente
    constructor(public _spotify: SpotifyService) {
    }

    buscarArtista(){
        if(this.termino.length == 0){
            return;
        }

        this._spotify.getArtistas(this.termino).subscribe();
    }
}
