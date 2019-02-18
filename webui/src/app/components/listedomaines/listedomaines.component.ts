import { Component, OnInit, ViewEncapsulation,Input, Output, EventEmitter } from '@angular/core';
import { OrganisationService } from '../../services/api/organisation.service';

@Component({
  selector: 'app-listedomaines',
  templateUrl: './listedomaines.component.html',
  styleUrls: ['./listedomaines.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ListedomainesComponent implements OnInit {
  @Output('selectedDomaine') selectedDomaineEvent = new EventEmitter<any>();
  @Input('InputListeDomaines') listeDomaines: Array<any>;
  @Input('InputSelectedDomaine') selectedDomaine :any;
  //listDomaines = [{"id":1,"name":"Back Office","parentId":null,"level":0},{"id":2,"name":"Front Office","parentId":null,"level":0},{"id":3,"name":"Siège","parentId":null,"level":0},{"id":4,"name":"Supply Chain","parentId":null,"level":0}];
  constructor(public organisationService: OrganisationService ) { }

  ngOnInit() {
  }

   onChangeDomaines(){
     this.selectedDomaineEvent.emit(this.selectedDomaine);
   }



}
