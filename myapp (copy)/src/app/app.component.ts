import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  User_name = ''

  isLogin()
  {
    if(localStorage['login_status']==1){
      this.User_name = localStorage['User_name']
      return true
    }else{
      return false
    }
  }

  Default(){
    if(localStorage['login_status']==1){
      return false
    }else{
      return true
    }
  }

  onLogout() {
    // remove the login status
    // sessionStorage.removeItem('login_status')
    localStorage.removeItem('login_status')
    localStorage.removeItem('User_id')
    localStorage.removeItem('User_name')
    //this.router.navigate(['/'])
  }
}
