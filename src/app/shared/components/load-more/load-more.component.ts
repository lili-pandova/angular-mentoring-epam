import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-load-more',
  templateUrl: './load-more.component.html',
  styleUrls: ['./load-more.component.scss']
})
export class LoadMoreComponent implements OnInit {
  constructor() {}

  loadMore(event) {
    console.log('You clicked load more!');
  }
  ngOnInit() {}
}
