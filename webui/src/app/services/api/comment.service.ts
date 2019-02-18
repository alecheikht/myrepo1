import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRequestService } from './api-request.service';


@Injectable()
export class CommentService {


    constructor(public http: HttpClient, private apiRequest: ApiRequestService) { }

    updateComment(comment) {
     return this.apiRequest.post('updatecomment', comment);

    }

}
