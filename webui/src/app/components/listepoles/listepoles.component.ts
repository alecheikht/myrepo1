import { Component, OnInit, ViewEncapsulation ,Input, Output, EventEmitter} from '@angular/core';
import { ComiteService } from '../../services/api/comite.service';
@Component({
  selector: 'app-listepoles',
  templateUrl: './listepoles.component.html',
  styleUrls: ['./listepoles.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ListepolesComponent implements OnInit {

  @Output('selectedPole') selectedPoleEvent = new EventEmitter<any>();
  @Input('InputListePoles') listePoles: Array<any>;
  @Input('InputSelectedPole') selectedPole :any;
  //listDomaines = [{"id":1,"name":"Back Office","parentId":null,"level":0},{"id":2,"name":"Front Office","parentId":null,"level":0},{"id":3,"name":"Siège","parentId":null,"level":0},{"id":4,"name":"Supply Chain","parentId":null,"level":0}];
  constructor() { }

  ngOnInit() {
  }

   onChangePoles(){
     this.selectedPoleEvent.emit(this.selectedPole);
   }

}
