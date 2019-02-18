import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRequestService } from './api-request.service';


@Injectable()
export class OrganisationService {


    constructor(public http: HttpClient, private apiRequest: ApiRequestService) { }

    getListDomaines() {
    
     return this.apiRequest.get('organisationtoplevel');
        //return this.themes;
    }

}
