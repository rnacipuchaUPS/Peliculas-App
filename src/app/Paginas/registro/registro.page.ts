import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { UsuarioEN } from 'src/app/models/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  usuarioo: UsuarioEN = new UsuarioEN;

  constructor(private router:Router,
              private movieService: MoviesService) { }
  cambiaralLogin() {
    this.router.navigate(['/login']);
  }

  enviarUsuario() {
    this.movieService.usuarioPost(this.usuarioo)
    .subscribe(res1 => {
      console.log(res1); 
    });
  }
  ngOnInit() {
  }

}
