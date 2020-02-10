import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MovieDB, DetallePelicula, ActoresPelicula, Genre, Pelicula } from '../interfaces/interfaces';
import { Observable } from 'rxjs';
import { PeliculaEN } from '../models/peliculaa';
import { UsuarioEN } from '../models/usuario';
import { Respuesta } from '../models/respuesta';

const URL = environment.url;
const apiKey = environment.apiKey;
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  generos: Genre[] = [];
  private popularesPage = 0;

  constructor(private http: HttpClient ) { }


  private ejecutarQuery<T>(query: string) {
    query = URL + query;
    query += `&api_key=${apiKey}&language=es&include_image_language=es`;
    return this.http.get<T>(query);
  }


  getPopulars() {
    this.popularesPage ++;
    const query = `/discover/movie?sort_by=popularity.desc&page=${this.popularesPage}`;
    return this.ejecutarQuery<MovieDB>(query);
  }

  getFeature() {
    const hoy = new Date();
    const ultimoDia = new Date(hoy.getFullYear(), hoy.getMonth() + 1, 0).getDate();
    let mes = hoy.getMonth() + 1;
    let mesString;

    if ( mes < 10 ) {
      mesString = '0' + mes;
    } else {
      mesString = mes;
    }
    const inicio = `${ hoy.getFullYear()}-${mesString}-01`;
    const fin = `${ hoy.getFullYear()}-${mesString}-${ultimoDia}`;

    return this.ejecutarQuery<MovieDB>(`/discover/movie?primary_release_date.gte=${ inicio }&primary_release_date.lte=${ fin }`);
  }

  getPeliculaDetalle(id: string) {
    return this.ejecutarQuery<DetallePelicula>(`/movie/${id}?a=1`);
  }

  getActoresPelicula(id: string) {
    return this.ejecutarQuery<ActoresPelicula>(`/movie/${id}/credits?a=1`);
  }

  getBuscarPelicula(pelicula: string) {
    return this.ejecutarQuery(`/search/movie?query=${pelicula}`);
  }

  cargarGeneros(): Promise<Genre[]> {
    return new Promise(resolve => {
      this.ejecutarQuery(`/genre/movie/list?a=1`).subscribe(response => {
        this.generos = response['genres'];
        console.log(this.generos);
        resolve(this.generos);
      });
    });
  }
  getPeliculas():Observable<PeliculaEN[]> {
    return this.http.get<PeliculaEN[]>('http://192.168.43.122:8080/ProyectoPeliculas/srv/Peliculas/listarP');
  }

  usuarioPost(usu:UsuarioEN):Observable<Respuesta>{
    return this.http.post<Respuesta>('http://192.168.43.122:8080/ProyectoPeliculas/srv/Usuarios/guardarU', usu, {headers: this.httpHeaders});

  }
 // usuarioLogin(usu:UsuarioEN):Observable<UsuarioEN>{
 //   return this.http.post<UsuarioEN>('http://192.168.43.122:8080/ProyectoPeliculas/srv/Usuarios/', usu, {httpHeaders});

 // }
}
