import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CodigoClienteComponent } from './componentes/codigoSeguridad/codigoCliente/codigo-cliente/codigo-cliente.component';
import { CodigoVendedorComponent } from './componentes/codigoSeguridad/codigoVendedor/codigo-vendedor/codigo-vendedor.component';
import { FormularioClienteComponent } from './componentes/formulario/formularioCliente/formulario-cliente/formulario-cliente.component';
import { FormularioVendedorComponent } from './componentes/formulario/formularioVendedor/formulario-vendedor/formulario-vendedor.component';
import { ClienteComponent } from './componentes/nuevaContraseña/cliente/cliente/cliente.component';
import { VendedorComponent } from './componentes/nuevaContraseña/vendedor/vendedor/vendedor.component';
import { RecuperarClienteComponent } from './componentes/recuperarContraseña/recuperarCliente/recuperar-cliente/recuperar-cliente.component';
import { RecuperarVendedorComponent } from './componentes/recuperarContraseña/recuperarVendedor/recuperar-vendedor/recuperar-vendedor.component';
//firebase


//envairoment

import {environment}  from '../environments/environment'

import { LoginClienteComponent } from './componentes/login/loginCliente/login-cliente/login-cliente.component';
import { LoginPrincipalComponent } from './componentes/login/loginPrincipal/login-principal/login-principal.component';
import { LoginVendedorComponent } from './componentes/login/loginVendedor/login-vendedor/login-vendedor.component';

import { HomeClienteComponent } from './componentes/home/homeCliente/home-cliente/home-cliente.component';



import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    CodigoClienteComponent,
    CodigoVendedorComponent,
    FormularioClienteComponent,
    FormularioVendedorComponent,
    ClienteComponent,
    VendedorComponent,
    RecuperarClienteComponent,
    RecuperarVendedorComponent,
   
  
   
    LoginClienteComponent,
   
    LoginPrincipalComponent,
   
    LoginVendedorComponent,
   
 
   
    HomeClienteComponent,
   
 
   
   
   
 
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
  ],
  providers: [
  
  
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
