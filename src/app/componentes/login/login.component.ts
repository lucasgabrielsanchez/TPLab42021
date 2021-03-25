import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario = '';
  clave = '';

  constructor(private _router: Router) {}

  ngOnInit() {}

  Entrar() {
    if (
      (this.usuario === 'admin' && this.clave === 'admin') ||
      (this.usuario === 'usuario' && this.clave === 'usuario')
    ) {
      this._router.navigate(['/home']);
    }
  }

  cargarUsuario(test: string) {
    this.usuario = test;
    this.clave = test;
  }
}
