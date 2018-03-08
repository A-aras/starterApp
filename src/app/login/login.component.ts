import { Component, OnInit } from '@angular/core';
import { UserInfo } from './userInfo';
import { userInfo } from 'os';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user : UserInfo= {
    userId: null,
    password: null
  };
  errormessage:string;

  constructor( private router: Router) { }

  Login()
  {
    this.errormessage="";
    if(this.user==null)
    {
      this.errormessage="User oject not constructed";
    }
    if(this.user.userId!="guest"||this.user.password!="guest")
    {
      this.errormessage="user id or password doesn't match";
    }
    if(this.errormessage=="")
    {
      this.router.navigate(['/Home']);
//this.router.navigateByUrl("");
    }
  }
  ngOnInit() {
  }

}

