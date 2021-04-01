import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderListService } from '../order-list.service';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css']
})
export class TrackingComponent implements OnInit {

  order: any;

  constructor(private _orderListService:OrderListService, private router:Router, private http:HttpClient) { }

  ngOnInit(): void {
    this._orderListService.getHttpOrderList()
    .subscribe((data: any) => {this.order = data; console.log('its comming from the traking ',this.order[0].id)})
  
  }


  deletHttpOrderList(orders:any){
    return this.http.delete<any>('//localhost:3000/orders'+ '/'+ orders.id)
    .subscribe(response => {
      //console.log(response)
      alert("order has been cancled!!! ");
  })
   
  }
}
