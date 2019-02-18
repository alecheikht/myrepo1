import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Theme } from '../themes/theme.js';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ThemeComponent implements OnInit {
  @Input() data: Theme;
  constructor() { }

  ngOnInit() {
  }

}
