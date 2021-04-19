import { Component, OnInit } from '@angular/core';
import { BookandauthorService } from '../bookandauthor.service';
import { FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  
  constructor(private BookandauthorService : BookandauthorService,private router : Router,private fb:FormBuilder) { }
user={
    uname:' ',
    password:' '
  }
  ngOnInit(): void {
  }
  Adddata()
  {    
    this.BookandauthorService.newuser(this.user);
    console.log("Called");    
    this.router.navigate(['/login']);
  }
}
