import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-itemdetail',
  templateUrl: './itemdetail.component.html',
  styleUrls: ['./itemdetail.component.scss']
})
export class ItemdetailComponent implements OnInit {

  constructor() { }
  @Input() item = '';

  ngOnInit(): void {
  }

}
