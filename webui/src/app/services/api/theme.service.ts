import { Theme } from '../../components/themes/theme.js';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRequestService } from './api-request.service';


@Injectable()
export class ThemeService {
    /*themes: Array<Theme> = [{ id: 1, name: 'theme1' },
    { id: 2, name: 'theme2'},
    { id: 3, name: 'theme3' }
    ];*/

    constructor(public http: HttpClient, private apiRequest: ApiRequestService) { }

    getTheme(themeId) {
    // return this.http.get<Array<Theme>>('http://localhost:9119/theme?id=5');
     return this.apiRequest.get('theme?id='+ themeId);
        //return this.themes;
    }

}
