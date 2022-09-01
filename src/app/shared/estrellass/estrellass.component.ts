import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import {faStar} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-estrellass',
  templateUrl: './estrellass.component.html'
})
export class EstrellassComponent implements OnChanges {
  
  faStar = faStar;
  starsList: any[]= [];
  tituloListaAutos: string ="Lista de automóviles";
  @Input() calificacion: number= 0;
  @Output() starsClick = new EventEmitter<string>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.starsList=[];
    for (var i = 0; i < this.calificacion; i++) {
      this.starsList.push(1);      
    }
  }
  onClick(stars: number):void{
    this.starsClick.emit("Calificación "+ stars);
  }
}
