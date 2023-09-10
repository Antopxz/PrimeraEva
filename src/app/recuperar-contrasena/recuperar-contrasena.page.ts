import { Component } from '@angular/core';

@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.page.html',
  styleUrls: ['./recuperar-contrasena.page.scss'],
})
export class RecuperarContrasenaPage{
  usuario: string = '';


  constructor() { }
  recuperarContrasena() {
    const contrasenaTemporal = this.generarContrasenaTemporal();
    alert(`Tu contraseña temporal es: ${contrasenaTemporal}`);
  }
  generarContrasenaTemporal() {
    return Math.random().toString(36).substring(2, 8);
  }


  ngOnInit() {

  }

}
