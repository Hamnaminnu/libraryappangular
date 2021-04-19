import { Component, OnInit } from '@angular/core';
import { BookandauthorService } from '../bookandauthor.service';
import { FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-deleteauthor',
  templateUrl: './deleteauthor.component.html',
  styleUrls: ['./deleteauthor.component.css']
})
export class DeleteauthorComponent implements OnInit {
  constructor(private BookandauthorService : BookandauthorService,private router : Router,private fb:FormBuilder) { }
  Item={
    author: ""
  }
  ngOnInit(): void {
  }
  Adddata()
  {    
    this.BookandauthorService.delauth(this.Item);
    console.log("Called");    
    this.router.navigate(['authors']);
  }

}
