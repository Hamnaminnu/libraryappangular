import { Component, OnInit } from '@angular/core';
import { BookandauthorService } from '../bookandauthor.service';
import { FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  constructor(private BookandauthorService : BookandauthorService,private router : Router,private fb:FormBuilder) { }
  Item={
    name: "",
born:"",
genre: "",
more: "",
img: ""
  }
  ngOnInit(): void {
    this.BookandauthorService.getauthors().subscribe((data)=>{
      this.BookandauthorService=JSON.parse(JSON.stringify(data));
     
    })
  }

}
