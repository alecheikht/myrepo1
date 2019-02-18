import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ImageComponent implements OnInit {
  @Input() image:any;
  constructor() { }

  ngOnInit() {
  }

}
