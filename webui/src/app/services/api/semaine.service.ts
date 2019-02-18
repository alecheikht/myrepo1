import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRequestService } from './api-request.service';


@Injectable()
export class SemaineService {

    listeSemaines :any[]=[{"id":1,"semaines":[{"semaine":"201901","encours":false},{"semaine":"201902","encours":true}]},{"id":2,"semaines":[{"semaine":"201901","encours":true},{"semaine":"201902","encours":false}]},{"id":3,"semaines":[{"semaine":"201811","encours":false},{"semaine":"201812","encours":true}]},{"id":4,"semaines":[{"semaine":"201902","encours":true},{"semaine":"201903","encours":false}]}];
    constructor(public http: HttpClient, private apiRequest: ApiRequestService) { }

    getListeSemaines(domaine) {
    
     return this.apiRequest.get('latscomites?organisationId=' + domaine.id);
     //console.log('Domaine id : '+ domaine.id);
     // return this.listeSemaines[domaine.id-1].semaines;
    }

    getSemaineEncours(domaine){
       var semaines= this.listeSemaines[domaine.id-1].semaines.filter(element => element.encours==true);
        //console.log('WWW  semaine '+ semaines);
       
       return semaines[0];
    }

}
