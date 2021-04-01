import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderListService } from '../order-list.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:any;

  constructor(private _orderListService:OrderListService, private router:Router) { }

  ngOnInit(): void {
    this._orderListService.getHttpUsers()
      .subscribe((data: any) => {this.user = data; console.log(this.user)})
  }

  authincate(f:any){
   
    var result = false;
    for(var i=0; i <this.user.length;i++){
      if((this.user[i].email == f.value.email) && (this.user[i].password == f.value.password)){
        result = true;
        this._orderListService.setUser(this.user[i]);     
         // this.router.navigate(['/main']);
      }     
    } 
    if(result==true){
        this.router.navigate(['/main']);        
    }else{
      alert("Invalid userId or Password");
      this.router.navigate(['/login']);   
    } 
  }
}
