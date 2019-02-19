import { Component, OnInit, ViewEncapsulation, OnChanges, ViewContainerRef,NgModule } from '@angular/core';
import { OrganisationService } from '../../services/api/organisation.service';
import { SemaineService } from '../../services/api/semaine.service';
import { ComiteService } from '../../services/api/comite.service';
import { Observable, Subject } from 'rxjs';
//import {MatDialog} from '@angular/material';
import {ModalValiderActionComponent} from '../../components/modal-valider-action/modal-valider-action.component';
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
/*import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Hi there!</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Hello, {{name}}!</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})

export class NgbdModalContent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}
}
*/
@NgModule({

  imports: [

  ],

  declarations: [

   ModalValiderActionComponent
  ],

  providers:[

  
  ],
  entryComponents: [
  //  NgbdModalContent
  ModalValiderActionComponent
  ],
  //exports: [ NgbdModalContent ],

  //bootstrap: [AppComponent]
})
@Component({
  selector: 'app-comite',
  templateUrl: './comite.component.html',
  styleUrls: ['./comite.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ComiteComponent implements OnInit, OnChanges {
  listeConfigDomaines: Array<any>;
  listeSemaines: Array<any>;
  listeConfigPoles: Array<any>;
  listeConfigSlides: Array<any>;
  comite: any;
  page;
  
  //listDomaines = [{"id":1,"name":"Back Office","parentId":null,"level":0},{"id":2,"name":"Front Office","parentId":null,"level":0},{"id":3,"name":"Siège","parentId":null,"level":0},{"id":4,"name":"Supply Chain","parentId":null,"level":0}];
  constructor(public comiteService: ComiteService, 
    public organisationService: OrganisationService, 
    public semaineService: SemaineService,
    public modalService: ModalDialogService,
		public viewRef: ViewContainerRef
     ) { }

  selectedConfigDomaine=null;
  selectedSemaine=null;
  selectedConfigPole=null;
  selectedConfigSlide=null;
  selectedSlide=null;

  ngOnInit() {
    this.initListeDomaines();
  }

  ngOnChanges(){
    this.selectedSlide=this.listeConfigSlides[this.page-1];
    console.log('ngOnChanges ' + this.page);
  }

  initListeDomaines() {
    return  this.organisationService.getListDomaines().subscribe(data => {
     console.log(data.toString());
     this.listeConfigDomaines = data;
     this.selectedConfigDomaine = this.listeConfigDomaines[0];
     this.initListeSemaines(this.selectedConfigDomaine);
   });
  }

  initListeSemaines(selectedConfigDomaine) {
    return  this.semaineService.getListeSemaines(selectedConfigDomaine).subscribe(data => {
     console.log(data.toString());
     this.listeSemaines = data;
     this.selectedSemaine = this.listeSemaines[0];
     this.initListePoles(this.selectedSemaine.semaine, this.selectedConfigDomaine.id);
   });
   
   /* this.listeSemaines = this.semaineService.getListeSemaines(selectedConfigDomaine);
    this.selectedSemaine = this.semaineService.getSemaineEncours(selectedConfigDomaine);
    this.initListePoles(this.selectedSemaine.semaine, this.selectedConfigDomaine.id);
    */
   }

   initListePoles(semaine,domaineId) {
    this.getListeConfigPoles(semaine,domaineId).subscribe(data => {
      this.listeConfigPoles = data;
      this.selectedConfigPole = this.listeConfigPoles[0];
      //data.forEach(p => console.log(p.id + ' - ' + p.name));
      //this.comite = data;
      this.initListeSlides(this.selectedConfigPole.id);
    });
   }

  initListeSlides(poleId) {
    this.listeConfigSlides=this.getListeConfigSlides(poleId);
    this.selectedConfigSlide=this.listeConfigSlides[0];
    this.page=this.listeConfigSlides.indexOf(this.selectedConfigSlide)+1;
    this.comiteService.getSlide(this.comite.id,this.selectedConfigSlide.id).subscribe(data => {
      this.selectedSlide = data;

    });
    //this.listeSlides.forEach(s => console.log(s.id + ' - ' + s.theme.name));

   }

  modifyDomaine($event) {
    console.log('Selected Domaine : '+ $event.name);
    this.selectedConfigDomaine = $event;
    this.initListeSemaines($event);
  }

  modifySemaine($event) {
    console.log('Selected Semaine : '+ $event.semaine);
    this.selectedSemaine = $event;
    this.initListePoles(this.selectedSemaine.semaine, this.selectedConfigDomaine.id);
  }

  modifyPole($event) {
    console.log('Selected Pole : '+ $event.name);
    this.selectedConfigPole = $event;
    this.initListeSlides(this.selectedConfigPole.id);
    //this.listeSlides=this.comiteService.getListeSlides(this.selectedPole.id);
    //this.listeSlides.forEach(s => console.log(s.id + ' - ' + s.theme.name));

  }

  modifySlide($event) {
    console.log('Selected Slide : '+ $event.id);
    this.selectedConfigSlide = $event;
    this.page=this.listeConfigSlides.indexOf(this.selectedConfigSlide)+1;
    console.log('page : '+this.page);
    console.log('Selected theme : ' + this.selectedConfigSlide.theme.id + ' - ' + this.selectedConfigSlide.theme.name);
    this.comiteService.getSlide(this.comite.id,this.selectedConfigSlide.id).subscribe(data => {
      this.selectedSlide = data;

    });
  }

  modifyPage($event) {
    console.log('modifyPage - Selected page : '+ $event);
    this.page=$event;
    this.selectedConfigSlide = this.listeConfigSlides[this.page-1];
    this.comiteService.getSlide(this.comite.id,this.selectedConfigSlide.id).subscribe(data => {
      this.selectedSlide = data;

    });
  }

  getListeConfigPoles(semaine:string, domaineId:string): Observable<any>{
    let polesSubject = new Subject<any>();
    this.comiteService.getComite(semaine,domaineId).subscribe(data =>{
        this.comite = data;
        var poles =[];
        data.configPresentation.configSlides.forEach(c => poles.push(c.organisation));
        polesSubject.next(poles);
    });
    return polesSubject;
  }

  getListeConfigSlides(poleId:string){
    //let listeSlidesSubject = new Subject<any>();
    return this.comite.configPresentation.configSlides.find(s => s.id===poleId).configSlides;
  }

  StateComiteChange(){
    console.log('StateComiteChange : ' + this.comite.encours);
    /*const dialogRef = this.dialog.open(ComiteConfirmClotureDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });*/
   // const modalRef = this.modalService.open(ModalValiderActionComponent);
   // modalRef.componentInstance.name = 'World';
   // const modalRef = this.modalService.open(NgbdModalContent);
    //modalRef.componentInstance.name = 'World';
   /* this.modalService.openDialog(this.viewRef, {
      title: 'Some modal title',
      childComponent: SimpleModalComponent,
        settings: {
        closeButtonClass: ''
        },
        data: {
        text: 'Some text content'
        }

      });*/
      if(this.comite.encours===true){
        var params ={ semaine: this.selectedSemaine.semaine, organisationId: this.selectedConfigDomaine.id };

        this.comiteService.CreateNextComite(params).subscribe(data =>{
          ////this.comite=data;
          this.initListeSemaines(this.selectedConfigDomaine);
          //this.initListeDomaines();
          this.modifySemaine(this.selectedSemaine);

        });
      }
      

  }

}
/*
@Component({
  selector: 'ComiteConfirmClotureDialog',
  templateUrl: 'comite.confirmClotureDialog.html',
})
export class ComiteConfirmClotureDialog {}
*/