import { Component, OnInit } from '@angular/core';
import { OrderListService } from '../order-list.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  listItems: any[] =[];
  // cartItem: any[] =[];
  countItem = 0;
  constructor(private _orderListService:OrderListService) { }

  ngOnInit(): void {

    this._orderListService.getHttpItemList()
    .subscribe((data: any) => {this.listItems = data})

      
  }

  onSelectedItem(items: any){
    // console.log(items);
    // this.cartItem.push(items);
    this.countItem = this.countItem + 1;
    this._orderListService.setCrtItem(items)
    // console.log(this.cartItem);
  }
}
