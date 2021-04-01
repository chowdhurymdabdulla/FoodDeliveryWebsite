import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderListService } from '../order-list.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

 
  name : any;
  constructor( private router:ActivatedRoute,private _orderListService:OrderListService) { }

  ngOnInit(): void {
    
    this.name = this._orderListService.getUser();
    //console.log("This is printing form Nav Bar",this.name )
  }
  // constructor( private router:ActivatedRoute) { }

  // ngOnInit(): void {
  //   this.id = parseInt(this.router.snapshot.paramMap.get('id') as string);
  //   this.name = this.router.snapshot.paramMap.get('name') as string;
  // }

 

}
