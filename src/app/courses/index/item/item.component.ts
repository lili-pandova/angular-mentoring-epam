import { Component, OnInit, Input } from '@angular/core';
import {IndexComponent} from '../index.component';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() public parentData;
  constructor() { }

  ngOnInit() {

  }

}
