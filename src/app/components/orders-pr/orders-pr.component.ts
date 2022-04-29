import { Component, OnInit } from '@angular/core';
import {PRDataService} from "../../services/pr-data.service";

@Component({
  selector: 'app-orders-pr',
  templateUrl: './orders-pr.component.html',
  styleUrls: ['./orders-pr.component.css']
})
export class OrdersPRComponent implements OnInit {

  public items$: any;

  constructor(private service: PRDataService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.service.getAll().subscribe(res =>{this.items$ = res})
  }
}
