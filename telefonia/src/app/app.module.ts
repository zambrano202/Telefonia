import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms'
import {RouterModule,Routes} from '@angular/router'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './componentes/nav/nav.component';
import { BodyComponent } from './componentes/body/body.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './componentes/home/home.component';
import { RegistroPersonaComponent } from './componentes/registro-persona/registro-persona.component';
import { RegistroLineaComponent } from './componentes/registro-linea/registro-linea.component';
import { RegistroEquipoComponent } from './componentes/registro-equipo/registro-equipo.component';
import {AuthenticationService} from './authentication.service';

const router:Routes =[

  {path: '', component: HomeComponent},
  {path: 'registro-persona', component: RegistroPersonaComponent},
  {path: 'registro-linea', component: RegistroLineaComponent},
  {path: 'registro-equipo', component: RegistroEquipoComponent},
  


]





@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BodyComponent,
    FooterComponent,
    HomeComponent,
    RegistroPersonaComponent,
    RegistroLineaComponent,
    RegistroEquipoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(router)
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
