import { Component, OnInit, ViewEncapsulation, Input} from '@angular/core';
import { CommentService } from '../../services/api/comment.service';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CommentComponent implements OnInit {
  @Input() comment :any;
  constructor(private commentService:CommentService) { }

  ngOnInit() {
  }

  register(){
    this.commentService.updateComment(this.comment).subscribe(data =>{
      
    });
  }

}
