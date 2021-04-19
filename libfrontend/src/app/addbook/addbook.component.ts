import { Component, OnInit } from '@angular/core';
import { BookandauthorService } from '../bookandauthor.service';
import { FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  constructor(private BookandauthorService : BookandauthorService,private router : Router,private fb:FormBuilder) { }
  Item={
    title: "",
author:"",
genre: "",
more: "",
img: ""
  }
  ngOnInit(): void {
  }
  Adddata()
  {    
    this.BookandauthorService.newbookdata(this.Item);
    console.log("Called");    
    this.router.navigate(['books']);
  }
}
