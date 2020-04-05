import {Component, Input, OnInit} from '@angular/core';
// @ts-ignore
import {Post} from '../../models/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: Post;

  buttonText = 'show';
  show = false;

  constructor() { }

  ngOnInit(): void {
  }

  setClasses(){

    const classes = {
      'card-text': true,
      collapse: true,
      show: this.show
    };
    return classes;
  }

  toggleShow(){

    if (this.show){
      this.show = false;
      this.buttonText = 'Show';
    } else {
      this.show = true;
      this.buttonText = 'Hide';
    }
  }
}
