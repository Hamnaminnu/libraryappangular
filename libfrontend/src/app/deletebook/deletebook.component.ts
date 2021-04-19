import { Component, OnInit } from '@angular/core';
import { BookandauthorService } from '../bookandauthor.service';
import { FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-deletebook',
  templateUrl: './deletebook.component.html',
  styleUrls: ['./deletebook.component.css']
})
export class DeletebookComponent implements OnInit {

  
  constructor(private BookandauthorService : BookandauthorService,private router : Router,private fb:FormBuilder) { }
  Item={
    title: ""
  }
  ngOnInit(): void {
  }
  Adddata()
  {    
    this.BookandauthorService.deldata(this.Item);
    console.log("Called");    
    this.router.navigate(['books']);
  }

}
