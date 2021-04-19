import { Component, OnInit } from '@angular/core';
import { BookandauthorService } from '../bookandauthor.service';
import { FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  constructor(private BookandauthorService : BookandauthorService,private router : Router,private fb:FormBuilder) { }
  Item={
    title: "",
author:"",
genre: "",
more: "",
img: ""
  }
  ngOnInit(): void {
    this.BookandauthorService.getbooks().subscribe((data)=>{
      this.BookandauthorService=JSON.parse(JSON.stringify(data));
     
    })
  }

}
