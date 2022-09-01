import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ListaAutosComponent } from './autos/lista-autos/lista-autos.component';
import { DetalleAutosComponent } from './autos/detalle-autos/detalle-autos.component';
import { AEspacioPipe } from './shared/a-espacio.pipe';
import { FormsModule } from "@angular/forms";
import { EstrellassComponent } from './shared/estrellass/estrellass.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InicioComponent } from './autos/inicio/inicio.component';
import { RouterModule } from '@angular/router';
import { DetalleAutoGuard } from './detalle-auto.guard';
import { ClientesComponent } from './clientes/clientes.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaAutosComponent,
    DetalleAutosComponent,
    AEspacioPipe,
    EstrellassComponent,
    InicioComponent,
    ClientesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule.forRoot([
      { path: "autos", component: ListaAutosComponent },
      {
        path: "auto/:id", component: DetalleAutosComponent,
        canActivate: [DetalleAutoGuard]
      },
      { path: "clientes", component: ClientesComponent },
      { path: "inicio", component: InicioComponent },
      { path: "", redirectTo: "inicio", pathMatch: "full" },
      { path: "**", redirectTo: "inicio", pathMatch: "full" }
    ])
  ],
  providers: [],
  exports: [
    EstrellassComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
