import { Component } from '@angular/core';
import { NavController } from '@ionic/angular'; // Importa NavController

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombreUsuario: string;

  constructor(private navCtrl: NavController) {
  this.nombreUsuario = "nick(usuario)";
}
// Función para redirigir a la página de inicio de sesión (login)
redirectToLogin() {
  this.navCtrl.navigateForward('/login');
}
}
