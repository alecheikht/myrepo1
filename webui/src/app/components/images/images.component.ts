import { Component, OnInit, ViewEncapsulation,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ImagesComponent implements OnInit {
  @Input('InputConfigImages') configImages: Array<any>;
  @Output() selectedImageEvent = new EventEmitter<any>();
  image: any;
  
  constructor() { }

  ngOnInit() {
  }

  onClick(image){
    this.image=image;
    console.log('Image => ' + image.nom);
    this.selectedImageEvent.emit(this.image);
  }

}
