import { Component, OnInit } from '@angular/core';
import { BookandauthorService } from '../bookandauthor.service';
import { FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  constructor(private BookandauthorService : BookandauthorService,private router : Router,private fb:FormBuilder) { }
user={
    uname:' ',
    password:' '
  }
  ngOnInit(): void {
    
  }
  check()
  {    
    // this.ProfileService.newusercheck(this.user);
    // console.log("Called");    
    this.BookandauthorService.newusercheck(this.user).subscribe(
     
      res =>  {
        // let res={};
        console.log(res);
      { if(res.message =="success"){
        this.router.navigate(['books']);
      }
       if(res.message =="fail"){
        this.router.navigate(['login']);
        alert('invalid username or password');
      }
    }
    })
   }   
}
