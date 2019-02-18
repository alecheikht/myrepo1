import { Component, OnInit, ViewEncapsulation, Input,OnChanges } from '@angular/core';
import { Theme } from './theme.js';
import { ThemeService } from '../../services/api/theme.service';
@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ThemesComponent implements OnInit {
  @Input('InputTheme') theme:any;
  @Input() selectedConfigDomaine:any;
  @Input() selectedConfigPole:any;

/*
  themes: Array<Theme> = [{ id: 1, name: 'theme1' },
    { id: 2, name: 'theme2'},
    { id: 3, name: 'theme3' }
    ];
    */
   themes: Array<Theme> ;
  constructor(public themeService: ThemeService) {
    
   }

  ngOnInit() {
    
  }
  ngOnChanges(){
    this.getTheme(this.theme.id);
  }
  getTheme(themeId) {
   return  this.themeService.getTheme(themeId).subscribe(data => {
    console.log(data.toString());
    this.themes = data;
  });
  }

}
