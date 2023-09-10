import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  nombre: string = '';
  apellido: string = '';
  rut: string = '';
  usuario: string = '';
  password: string = '';

  constructor(private router: Router, private toastController: ToastController) {}
  registro(){
    const nuevoUsuario = {
      nombre: this.nombre,
      apellido: this.apellido,
      rut: this.rut,
      usuario: this.usuario,
      password: this.password,
    };
    this.mostrarNotificacionRegistroExitoso();
  }
  async mostrarNotificacionRegistroExitoso() {
    const toast = await this.toastController.create({
      message: 'Registro exitoso. Ahora puedes iniciar sesión.',
      duration: 3000, 
      position: 'bottom',
      buttons: [
        {
          text: 'Iniciar Sesión',
        handler: () => {
          this.irAInicioSesion();
        },
        },
      ],

    });
    toast.present();
  }
  irAInicioSesion() {
    this.router.navigate(['/login']);

  }


  ngOnInit() {
  }

}
