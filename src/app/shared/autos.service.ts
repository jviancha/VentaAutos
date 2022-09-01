import { Injectable } from "@angular/core";
import { Auto } from "../datos/auto";
@Injectable({
  providedIn: "root"
})
export class AutosService {
  listaAutos: Auto[] = [];

  public obtenListaAutos(): Auto[] {
    if (this.listaAutos.length == 0) {
      this.listaAutos = this._determinaListaAutos();
    }
    return this.listaAutos;
  }

  public obtenAuto(id: number): Auto | undefined {
    if (this.listaAutos.length == 0) {
      this.listaAutos = this._determinaListaAutos();
    }
    return this.listaAutos.find(auto => auto.id == id);
  }

  private _determinaListaAutos(): Auto[] {
    let listaAutos = [
      {
        id: 1,
        img: 'assets/imageAutos/auto-1.jpg',
        marca: 'Audi',
        modelo: 'A4',
        anio: 2020,
        color: 'Verde Claro',
        kilometros: 20500,
        precio: 25000000,
        calificacion: 3,
      },
      {
        id: 2,
        img: 'assets/imageAutos/auto-2.jpg',
        marca: 'Mercedez Benz',
        modelo: 'A1',
        anio: 2018,
        color: 'Blanco',
        kilometros: 700,
        precio: 30000000,
        calificacion: 5,
      },
      {
        id: 3,
        img: 'assets/imageAutos/auto-3.jpg',
        marca: 'Mazda',
        modelo: 'e-tron',
        anio: 2020,
        color: 'Negro',
        kilometros: 40500,
        precio: 70000000,
        calificacion: 1,
      },
      {
        id: 4,
        img: 'assets/imageAutos/auto-4.jpg',
        marca: 'Mazda',
        modelo: '2022',
        anio: 2022,
        color: 'Negro',
        kilometros: 14000,
        precio: 70000000,
        calificacion: 4,
      },
      {
        id: 5,
        img: 'assets/imageAutos/auto-5.jpg',
        marca: 'Mazda',
        modelo: '2022',
        anio: 2022,
        color: 'Negro',
        kilometros: 14000,
        precio: 70000000,
        calificacion: 5,
      },
    ];
    return listaAutos;
  }
}