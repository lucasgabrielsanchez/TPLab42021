import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { environment } from '../environments/environment'
import { AuthService } from './servicios/auth.service'

//Imports de PrimeNG
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SplitButtonModule } from 'primeng/splitbutton';
import { CardModule } from 'primeng/card';
import { HomeComponent } from './componentes/home/home.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { ErrorComponent } from './componentes/error/error.component';
import { RegistroComponent } from './componentes/registro/registro.component';

//Firebase
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent, QuienSoyComponent, ErrorComponent, RegistroComponent, CabeceraComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ToolbarModule,
    ButtonModule,
    InputTextModule,
    SplitButtonModule,
    CardModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
