import { Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { HttpClient, HttpHeaders } from '@angular/common/http';

// Los HttpHeaders nos van a permitir añadir el token cuando la api lo necesite
@Injectable()
export class SpotifyService {

    artistas:any[] = [];

    urlSpotify:string = 'https://api.spotify.com/v1/';
    tokenSpotify:string = 'BQAPwkF44g_uD7zrJcnSBoOqKaBEqRNlR8MR4OTRXRWTEe6GuzmoSG2z7SEPGTgS3RolkJ8EXu8a2BPn_sc';

    constructor(public http:HttpClient) {
        console.log('Servicio de spotify funcionando');
    }

    private getHeaders():HttpHeaders{
        let headers = new HttpHeaders({
            'authorization':'Bearer ' + this.tokenSpotify
        });
        return headers;
    }

    getArtista(id:string){
        let url = `${ this.urlSpotify }artists/${ id }`;

        let headers = this.getHeaders();

        return this.http.get(url, {headers});
                        /*.map( (resp:any) => {
                                this.artistas = resp.artists.items;
                                return this.artistas;
                            });*/
    }

    getArtistas(termino:string){
        // Peticion get a un servicio que no pida tokens
        // Primero nos creamos una variable de tipo string con la url
        let url = `${ this.urlSpotify }search?query=${ termino }&type=artist&limit=20`;

        // Headers con el token
        let headers = this.getHeaders();

        // Despues hacemos un get de esa url y un subscribe para conseguir la respuesta, usando una funcion flecha
        // Con map podemos cambiar el return para enviar al subscribe de search otra cosa que necesitamos, por ejemplo el nombre sólo
        return this.http.get(url, {headers})
                        .map( (resp:any) => {
                                this.artistas = resp.artists.items;
                                return this.artistas;
                            });
    }

    getTopTracks(id:string){
        let url = `${ this.urlSpotify }artists/${ id }/top-tracks?country=US`;
        let headers = this.getHeaders();

        return this.http.get(url, {headers});
    }
}
