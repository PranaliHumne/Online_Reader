import {Injectable} from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class UserProfileServie{
    url = 'http://localhost:4000'

    constructor(private http: HttpClient,
        private router:Router){} 
        
        getUserDetails(User_id : number){
            return this.http.get(this.url+'/users/'+User_id)
        }

        editProfile(full_name: string, User_name: string, email: string,password: string,User_id : number)
         {
            const body = new FormData()
             body.append('full_name', full_name)
             body.append('User_name',User_name)
             body.append('eamil', email)
             body.append('password', password)
            return this.http.put(this.url + '/editProfile/'+User_id,body)

        }
}