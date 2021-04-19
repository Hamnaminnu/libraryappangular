import { Component, OnInit } from '@angular/core';
import { BookandauthorService } from '../bookandauthor.service';
import { FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-updateauthor',
  templateUrl: './updateauthor.component.html',
  styleUrls: ['./updateauthor.component.css']
})
export class UpdateauthorComponent implements OnInit {
  constructor(private BookandauthorService : BookandauthorService,private router : Router,private fb:FormBuilder) { }
  Item={
    author: "",
  more: ""
  }
  ngOnInit(): void {
  }
  Adddata()
  {    
    this.BookandauthorService.updateauth(this.Item);
    console.log("Called");    
    this.router.navigate(['authors']);
  }

}
