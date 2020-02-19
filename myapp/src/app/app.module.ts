import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserHomeComponent } from './book/displayBook/home.component';
import { UserHomePageService } from './book/home.service';
import { UserLoginServie } from './loginPage/loginPageServie';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms'
import { RouterModule, Route } from '@angular/router';
import { UserLoginComponent } from './loginPage/login/login.component';
import { UserRegisterComponent } from './loginPage/register/user.register.comonent';
import { bookDetailComponent } from './book/details/book.detail.component';
import { LibraryComponent } from './library/showLibrary/library.component';
import { LibraryService } from './library/library.service';
import { AddToLibraryComponent } from './library/addToLibrary/addToLibrary.component';
import { LogOutComponent } from './loginPage/logOut/logout.component';
import { SearchBookComponent } from './book/search/search.component';
import { BookCategoryComponent } from './book/category/book.category';
import { UserProfileServie } from './profile/user.profile.service';
import { ShowPdfComponent } from './book/showbook/show.book.component';
import { EditProfileComponent } from './profile/EditProfile/profile.component';

const routes: Route[] =
[
  {path:'', component: UserHomeComponent},
  {path: 'user-login', component: UserLoginComponent },
  {path: 'user-register', component: UserRegisterComponent},
  {path: 'edit-Profile', component : EditProfileComponent},

  {path: 'book-list', component: UserHomeComponent},
  {path: 'book-detail/:id', component : bookDetailComponent},
  {path: 'user-library', component: LibraryComponent},
  {path: 'addTo-library', component: AddToLibraryComponent},
  {path: 'show-pdf/:id', component: ShowPdfComponent},
  {path: 'search-book', component : SearchBookComponent},
  {path: 'category', component : BookCategoryComponent}
  
  
]


@NgModule({
  declarations: [
    AppComponent,
    UserHomeComponent,
    UserLoginComponent,
    UserRegisterComponent,
    LogOutComponent,
    EditProfileComponent,
    
    bookDetailComponent,
    LibraryComponent,
    AddToLibraryComponent,
    ShowPdfComponent,
    SearchBookComponent,
    BookCategoryComponent

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    UserHomePageService,
    UserLoginServie,
    LibraryService,
    UserProfileServie
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
