import { Component, OnInit } from '@angular/core';
import {PRDataService} from "../../services/pr-data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-orders-details-pr',
  templateUrl: './orders-details-pr.component.html',
  styleUrls: ['./orders-details-pr.component.css']
})
export class OrdersDetailsPRComponent implements OnInit {
  public title: string = ''
  public text: string = ''
  public image: string = ''
  constructor(private service: PRDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id: string = ''
    this.route.paramMap.subscribe((params: any) =>{id=params.get('id')})

    this.service.getById(id).subscribe((res: any) =>{
      this.title = res['title']
      this.image = res['image']
      this.text = res['text']
    })
  }

}
