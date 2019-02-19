import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRequestService } from './api-request.service';
import { Observable, Subject } from 'rxjs';
import { isNullOrUndefined } from '@swimlane/ngx-datatable/release/utils';



@Injectable()
export class ComiteService {
  //  comite: any;
   
    constructor(private http: HttpClient, private apiRequest: ApiRequestService) { }
/*
    getComite(semaine:string, domaineId:String): Observable<any> {
        let comiteSubject = new Subject<any>();
        if(isNullOrUndefined(this.comite) || this.comite.semaine != semaine || this.comite.organisation.id != domaineId  ){
            this.apiRequest.get('comite?semaine=' + semaine + '&organisationId=' + domaineId).subscribe(data => {
                console.log('call apiRequest : ' + data.id);
                this.comite = data;
                comiteSubject.next(this.comite);
            });
        }else{
            console.log('get local comite : ' + this.comite.id);
            comiteSubject.next(this.comite);
        }
        return comiteSubject;
  
    }
*/
    getComite(semaine:string, domaineId:String): Observable<any> {

        return  this.apiRequest.get('comite?semaine=' + semaine + '&organisationId=' + domaineId);

    }
/*
    getListeConfigPoles(semaine:string, domaineId:string): Observable<any>{
        let polesSubject = new Subject<any>();
        this.getComite(semaine,domaineId).subscribe(data =>{
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

    getSlide(configSlideId:string): Observable<any>{
        return this.apiRequest.get('slide?comiteId=' + this.comite.id + '&configSlideId=' + configSlideId);
    
    }
*/
    getSlide(comiteId:string, configSlideId:string): Observable<any>{
        return this.apiRequest.get('slide?comiteId=' + comiteId + '&configSlideId=' + configSlideId);

    }

    CreateNextComite(params) {
        return this.apiRequest.post('createnextcomite', params);
   
    }
}
