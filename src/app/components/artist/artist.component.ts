import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from "../../services/spotify.service";

@Component({
    selector: 'app-artist',
    templateUrl: './artist.component.html',
    styles: []
})
export class ArtistComponent implements OnInit {
    numero:number=95;
    artista:any = {};
    topTracks:any[] = [];

    constructor(private activatedRoute: ActivatedRoute, public _spotify: SpotifyService) { }

    ngOnInit() {
        // Los observables siempre están pendientes de cambios hasta que llamamos a subscribe
        this.activatedRoute.params
                .map(parametros=>parametros['id'])
                .subscribe(id => {
                        this._spotify.getArtista(id).subscribe(artista => {
                            console.log(artista);
                            this.artista = artista;
                        });

                        this._spotify.getTopTracks(id)
                        .map( (resp:any) => resp.tracks)
                        .subscribe(topTracks =>{
                            console.log(topTracks);
                            this.topTracks = topTracks;
                        });
        });
    }

}
