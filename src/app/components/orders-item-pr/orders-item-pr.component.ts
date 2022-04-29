import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-orders-item-pr',
  templateUrl: './orders-item-pr.component.html',
  styleUrls: ['./orders-item-pr.component.css']
})
export class OrdersItemPRComponent implements OnInit {

  @Input() image?: string
  @Input() text?: string
  @Input() title?: string
  @Input() id?: number
  constructor() { }

  ngOnInit(): void {
  }

}
