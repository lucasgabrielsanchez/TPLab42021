import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario = '';
  clave = '';

  constructor(private _router: Router, public authService: AuthService) {}

  ngOnInit() {}

  Entrar() {
    // if (
    //   (this.usuario === 'admin' && this.clave === 'admin') ||
    //   (this.usuario === 'usuario' && this.clave === 'usuario')
    // ) {
    //   this._router.navigate(['/home']);
    // }
    this.authService.SignIn(this.usuario, this.clave);
  }

  cargarUsuario(usuario: string, clave: string) {
    this.usuario = usuario;
    this.clave = clave;
  }
}
