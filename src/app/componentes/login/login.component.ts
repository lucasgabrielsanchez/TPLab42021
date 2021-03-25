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
    if (this.usuario === 'admin' && this.clave === 'admin') {
      this._router.navigate(['/Principal']);
    }
  }
}
