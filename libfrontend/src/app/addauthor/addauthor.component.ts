import { Component, OnInit } from '@angular/core';
import { BookandauthorService } from '../bookandauthor.service';
import { FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addauthor',
  templateUrl: './addauthor.component.html',
  styleUrls: ['./addauthor.component.css']
})
export class AddauthorComponent implements OnInit {
  constructor(private BookandauthorService : BookandauthorService,private router : Router,private fb:FormBuilder) { }
  Item={
    name: "",
born:"",
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
