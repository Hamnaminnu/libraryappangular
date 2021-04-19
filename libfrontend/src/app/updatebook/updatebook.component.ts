import { Component, OnInit } from '@angular/core';
import { BookandauthorService } from '../bookandauthor.service';
import { FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit {

  constructor(private BookandauthorService : BookandauthorService,private router : Router,private fb:FormBuilder) { }
  Item={
    title: "",
  more: ""
  }
  ngOnInit(): void {
  }
  Adddata()
  {    
    this.BookandauthorService.updatedata(this.Item);
    console.log("Called");    
    this.router.navigate(['books']);
  }
}
