import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class OrderListService {

  cart: any[] =[];
  // user:any  ={
  //   id: '',
  //   name: ''
  // }
  name: any;

  url = "http://localhost:3000/feed";
  url1 = "http://localhost:3000/users";
  url2 = "http://localhost:3000/orders";

  constructor( private http:HttpClient) { }

  getHttpItemList(): Observable<any> {
      return this.http.get(this.url)
        .pipe(map((res: any) =>{return res}))
  }
  
  getHttpUsers(): Observable<any> {
    return this.http.get(this.url1)
      .pipe(map((res: any) =>{return res}))
  }

  getHttpOrderList(): Observable<any> {
    return this.http.get(this.url2)
      .pipe(map((res: any) =>{return res}))
  }

  setCrtItem(items: any){
    // this.cart.push(items);
    // console.log("items in service ", items);
    this.cart.push(items);
    // console.log("Printing the Cart", this.cart)
  }
  getCrtItem(){
    return this.cart;
  }

  setUser(userName:any){
    this.name = userName;
    //console.log("printing from user service set user method ",this.name);
  }

  getUser(){
    return this.name;
  }
}
