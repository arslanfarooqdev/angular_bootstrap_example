import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  @Input() page: any[];
  @Input() pageNumber: number;
  @Input() show: boolean;


  constructor() { }

  ngOnInit(): void {
  }

  setClasses(){
    return {
      'page-container': true,
      collapse: true,
      show: this.show
    };
  }
}
