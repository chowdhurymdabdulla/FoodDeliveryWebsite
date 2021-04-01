import { Component, OnInit } from '@angular/core';
import { OrderListService } from '../order-list.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  customer : any;
  constructor(private _orderListService:OrderListService) { }

  ngOnInit(): void {
    this.customer = this._orderListService.getUser();
    //console.log("This is printing from profile",this.customer )
  }

}
