import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddauthorComponent } from './addauthor/addauthor.component';
import { AddbookComponent } from './addbook/addbook.component';
import { AuthorsComponent } from './authors/authors.component';
import { BookComponent } from './book/book.component';
import { BooksComponent } from './books/books.component';
import { DeleteauthorComponent } from './deleteauthor/deleteauthor.component';
import { DeletebookComponent } from './deletebook/deletebook.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateauthorComponent } from './updateauthor/updateauthor.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [{path:'books',component:BooksComponent},{path:'book',component:BookComponent},{path:'authors',component:AuthorsComponent}
,{path:'author',component:AuthorsComponent},{path:'login',component:LoginComponent},{path:'signup',component:SignupComponent},
{path:'updatebook',component:UpdatebookComponent},{path:'updateauthor',component:UpdateauthorComponent},{path:'',component:WelcomeComponent}
,{path:'deletebook',component:DeletebookComponent},{path:'deleteauthor',component:DeleteauthorComponent},
{path:'addbook',component:AddbookComponent},{path:'addauthor',component:AddauthorComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
