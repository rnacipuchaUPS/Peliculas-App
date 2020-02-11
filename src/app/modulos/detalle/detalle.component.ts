import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {
  @Input('mensaje') mensaje;
  constructor(private router:Router, private modal: ModalController) { }

  ngOnInit() {
    console.log(this.mensaje);
  }
  cambiarTab() {
    this.modal.dismiss(['/tabs']);
  }

}
