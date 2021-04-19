import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookandauthorService {
  
  item5 = {
    uname:" ",
    password:" "}
    item3 = {
      uname:" ",
      password:" "}
      item={
        title: "",
    author:"",
    genre: "",
    more: "",
    img: ""
      }
      item2={
        name: "",
    born:"",
    genre: "",
    more: "",
    img: ""
      }
      item1={
        title: "",
      more: ""
      }
      item6={author: "",
      more: ""}
      item9={
        title: ""
      }
      item8={author: ""}
  constructor( private http:HttpClient) { }
  getbooks(){
    return this.http.get<any>("http://localhost:3000/books")
  }
  getauthors(){
    return this.http.get<any>("http://localhost:3000/authors")
  }
  newuser(item3:any){
    return this.http.post("http://localhost:3000/userdata",{"user":item3})
    .subscribe(data =>{console.log(data)})
  }
  newusercheck(item5:any){
    return this.http.post<any>("http://localhost:3000/usercheck",{"usercheck":item5})
  }
  newbookdata(item:any)
  {   
    return this.http.post("http://localhost:3000/insert",{"bookdata":item})
    .subscribe(data =>{console.log(data)})
  }
  newauthordata(item3:any)
  {   
    return this.http.post("http://localhost:3000/insertauthor",{"authordata":item3})
    .subscribe(data =>{console.log(data)})
  }
  updatedata(item1:any)
  {   
    return this.http.post("http://localhost:3000/updatebook",{"bookdata":item1})
    .subscribe(data =>{console.log(data)})
  }
  updateauth(item6:any)
  {   
    return this.http.post("http://localhost:3000/updateauthor",{"authordata":item6})
    .subscribe(data =>{console.log(data)})
  }
  deldata(item9:any)
  {   
    return this.http.post("http://localhost:3000/deleteauthor",{"bookdata":item9})
    .subscribe(data =>{console.log(data)})
  }
  delauth(item8:any)
  {   
    return this.http.post("http://localhost:3000/deleteauthor",{"authordata":item8})
    .subscribe(data =>{console.log(data)})
  }
}
