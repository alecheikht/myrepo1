import { Component, OnInit, ViewEncapsulation, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-listesemaines',
  templateUrl: './listesemaines.component.html',
  styleUrls: ['./listesemaines.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ListesemainesComponent implements OnInit {

  @Input('InputListeSemaines') listeSemaines: Array<any>;
  @Input('InputSelectedSemaine') selectedSemaine :any;
  @Output('selectedSemaine') selectedSemaineEvent = new EventEmitter<any>();
  //listDomaines = [{"id":1,"name":"Back Office","parentId":null,"level":0},{"id":2,"name":"Front Office","parentId":null,"level":0},{"id":3,"name":"Siège","parentId":null,"level":0},{"id":4,"name":"Supply Chain","parentId":null,"level":0}];
  constructor() { }

  ngOnInit() {

  }

  onChangeSemaines(){
    this.selectedSemaineEvent.emit(this.selectedSemaine);
  }

}
