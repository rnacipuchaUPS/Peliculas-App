import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/interfaces';
import { MoviesService } from 'src/app/services/movies.service';
import { PeliculaEN } from 'src/app/models/peliculaa';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  peliculasRecientes: Pelicula[] = [];

  peliculasPopulares: Pelicula[] = [];
  peliculaa: PeliculaEN[] = [];

  slideOpc = {
    slidesPerView: 1.4,
    freeMode: true
  };

  constructor(private movieService: MoviesService) { }
  ngOnInit() {
    this.movieService.getFeature()
      .subscribe(response => {
        this.peliculasRecientes = response.results;
      });
    this.getPopulares();

    this.movieService.getPeliculas()
    .subscribe(res1 => {
      this.peliculaa = res1;
      console.log(this.peliculaa);
      

    });

  }
  cargarMas() {
    this.getPopulares();
  }
  getPopulares() {
    this.movieService.getPopulars()
      .subscribe(response => {
        const tmp = [...this.peliculasPopulares, ...response.results];
        this.peliculasPopulares = tmp;
      });
  }
}
