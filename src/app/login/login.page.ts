import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {
 
  username: string = '';
  password: string = '';
login(){

}
  constructor(private router: Router) { }
  irARegistro() {
    this.router.navigate(['/registro']);
  }
  irARecuperarContrasena() {
    this.router.navigate(['/recuperar-contrasena']);
  }
  ngOnInit() {
  }

}
