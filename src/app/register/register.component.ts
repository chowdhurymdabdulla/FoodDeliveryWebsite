import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderListService } from '../order-list.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  postId: any;
  

  constructor(private http:HttpClient, private router:Router,private _orderListService:OrderListService) { }

  ngOnInit(): void {
  }

  onRfSubmilt(rf: any){
   
    console.log(rf.password.paw);
       this.http.post<any>('http://localhost:3000/users', { name: rf.name, email: rf.email, password: rf.password.paw })
       .subscribe(response => {
                  this.postId = response.id;
                  console.log(this.postId)
              })
      // if(this.postId != null){
      //           this.router.navigate(['/main', {name: rf.name, userId: this.postId}]);
      //           this._orderListService.setUser(rf.name);
      //         }else{
      //           alert("Registration failed plese try again")
      //           this.router.navigate(['/register'])
      //         }
      //       console.log("customer Created")
      this.router.navigate(['/main', {name: rf.name, userId: this.postId}]);
              this._orderListService.setUser(rf);
  }
}
