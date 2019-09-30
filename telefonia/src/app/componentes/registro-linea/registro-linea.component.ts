import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../../authentication.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-registro-linea',
  templateUrl: './registro-linea.component.html'
})
export class RegistroLineaComponent {
  credentials: TokenPayload = {
    perNombre: '',
    perApellido: '',
    perTelefonoFijo: '',
    perFechaDeNacimiento: '',
    perCedula: '',
    linumerolinea: '',
    linestado: '',
    equSerial: '',
    liNumeroLinea: '',
    equMarca: '',
    equDescripcion: '',
    equEstado: ''

    
  }

  constructor(private auth: AuthenticationService, private router: Router) { }

  register2() {
    this.auth.register(this.credentials).subscribe(
      () => {
        this.router.navigateByUrl('/')
      },
      err => {
        this.router.navigateByUrl('/registro-persona')
      }
    )
  }

}