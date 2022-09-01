import { Component, OnInit } from '@angular/core';
import { Auto } from 'src/app/datos/auto';
import { AutosService } from 'src/app/shared/autos.service';
import { EstrellassComponent } from 'src/app/shared/estrellass/estrellass.component';

@Component({
  selector: 'app-lista-autos',
  templateUrl: './lista-autos.component.html',
  styleUrls: ['./lista-autos.component.css']
})
export class ListaAutosComponent implements OnInit {
  arregloAutos: Auto[] = [];
  listaAutosFiltrados: Auto[] = [];
  tituloListaAutos: string = 'Lista de Automóviles';
  filtros = "fil"
  muestraImagen: boolean = false;
  descripcion = "Prueba de enlace entre componentes"
  private _filtro: string = "";

  get filtro(): string {
    return this._filtro;
  }

  set filtro(filtro: string) {
    this._filtro = filtro;
    this.filtrarAutos(this._filtro);
  }

  filtrarAutos(filtrarPor: string): void {
    filtrarPor = filtrarPor.toLowerCase();
    this.listaAutosFiltrados = this.arregloAutos.filter(
      (auto: Auto) => auto.marca.toLowerCase().includes(filtrarPor)
    )
  }

  constructor(private _autosService: AutosService) { }

  ngOnInit(): void {
    this.arregloAutos = this._autosService.obtenListaAutos();
    this.listaAutosFiltrados = this.arregloAutos;
  }

  muestraImagenes(): void {
    this.muestraImagen = !this.muestraImagen;
  }

  procesarClick(event: any): void {
    console.log("Entré");
  }

  onClickCalificacion(mensaje: string): void {
    alert("Dieron click en la calificación " + mensaje);

  }

}
