import { Component, OnInit, ViewEncapsulation, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class SlideComponent implements OnInit {
  @Input('InputSlide') slide :any;
  configImages: Array<any>;
  selectedImage: any;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    if(this.slide.configSlide.configImages.length>0){
      this.selectedImage=this.slide.configSlide.configImages[0];
    }else{
      this.selectedImage=null;
    }

  }

  getJsonSlide(){
    return JSON.stringify(this.slide);
  }

  modifyImage($event) {
    console.log('Selected Image : '+ $event.id);
    this.selectedImage = $event;
  }

}
