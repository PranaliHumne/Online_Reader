import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PdfViewerModule } from 'ng2-pdf-viewer';
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
import { ShowPdfComponent } from './book/details/showbook/show.book.component';
import { LogOutComponent } from './loginPage/logOut/logout.component';

const routes: Route[] =
[
  {path:'', component: UserLoginComponent},
  {path: 'user-login', component: UserLoginComponent },
  {path: 'user-register', component: UserRegisterComponent},

  {path: 'book-list', component: UserHomeComponent},
  {path: 'book-detail/:id', component : bookDetailComponent},
  {path: 'user-library', component: LibraryComponent},
  {path: 'addTo-library', component: AddToLibraryComponent},
  {path: 'show-pdf/:id', component: ShowPdfComponent},
  
  
]


@NgModule({
  declarations: [
    AppComponent,
    UserHomeComponent,
    UserLoginComponent,
    UserRegisterComponent,
    LogOutComponent,
    
    bookDetailComponent,
    LibraryComponent,
    AddToLibraryComponent,
    ShowPdfComponent
  ],
  imports: [
    PdfViewerModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    UserHomePageService,
    UserLoginServie,
    LibraryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
