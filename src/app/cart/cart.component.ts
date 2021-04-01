import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderListService } from '../order-list.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems : any[]=[];
  postId: any;
  // totalCost = 0;

  constructor(private _orderListService:OrderListService,private router:Router,private http:HttpClient) { }
  @Input() cartItem :any;

  ngOnInit(): void {
    //console.log("this is from card page" , this._orderListService.getCrtItem());
    this.cartItems = this._orderListService.getCrtItem();
  }
  
  // getTotalCost(){
  //   for(var i =0; i<this.cartItems.length; i++){
  //     this.totalCost = this.totalCost + this.cartItems.cost
  //   }
  // }
  onPlaceOrder(){

    this.http.post<any>('http://localhost:3000/orders', { order: this.cartItems })
    .subscribe(response => {
               this.postId = response.id;
              //  console.log(this.postId)
           })
    this.router.navigate(['/traking', {userId: this.postId}]);
    this.cartItems.length = 0;
  }
}
