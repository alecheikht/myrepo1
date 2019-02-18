import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-listeslides',
  templateUrl: './listeslides.component.html',
  styleUrls: ['./listeslides.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ListeslidesComponent implements OnInit {

  @Output('selectedSlide') selectedSlideEvent = new EventEmitter<any>();
  @Input('InputListeSlides') listeSlides: Array<any>;
  @Input('InputSelectedSlide') selectedSlide :any;

  constructor() { }

  ngOnInit() {
  }

   onChangeSlides(){
     this.selectedSlideEvent.emit(this.selectedSlide);
   }


}
