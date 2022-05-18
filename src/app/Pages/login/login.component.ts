import { usuarios } from './../../Models/hardData';
import { CambioPaginaService } from './../../Services/CambioPagina/cambio-pagina.service';
import { LoadingService } from 'src/app/Services/Loading/loading.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/hardData';

@Component({
  selector: 'edix-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  router: Router;//variable para poder enrutar.
  login = 1;//Variable que se pasa en el método cambioDePágina.



  /**
   *variable que se recibe al hacer click en entar.
   *
   * @var usuarioEscrito
   * @var contrasenaEscrita
   */
  usuarioEscrito: string;
  contrasenaEscrita: string;

  listaUsuarios: User[];


  constructor(private cambio: CambioPaginaService) { }

  ngOnInit(): void {
    this.cargarDatos();
  }


  /**Método que carga los datos de usuarios y contraseñas para realizar la comprobación*/
  cargarDatos() {
    this.listaUsuarios = usuarios;
  }

  /**Método que comprueba al pulsar entar que el usuario y contraseña son correctos
   * En caso de que lo sea llama a la función cambioDePagina
   * Y nos pasa a la página principal.
   */
  public comprobarusuario() {
    for (let i = 0; i < this.listaUsuarios.length; ++i) {
      if (this.listaUsuarios[i].usuario === this.usuarioEscrito &&
        this.listaUsuarios[i].contrasena === this.contrasenaEscrita) {
        this.cambio.cambioPagina(this.login, true);
      }
    }
  }

  /**Método que se llama con el botón "Recuperar contraseña y da un alert" */
  public noImplementado() {
    alert("  Si quieres crear un nuevo usuario\n  Ponte en contacto con nosotros \n  info@pickacloth.es");
  }
}


