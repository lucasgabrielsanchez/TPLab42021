import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  usuario = '';
  clave = '';

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  Registrarme(){
    this.authService.SignUp(this.usuario,this.clave);
  }

}
