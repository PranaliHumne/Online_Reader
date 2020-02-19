import {Injectable} from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class UserProfileServie{
    url = 'http://localhost:4000/users'

    constructor(private http: HttpClient,
        private router:Router){} 
        
    editProfile(full_name: string, User_name: string, email: string,User_id:number){
        const body = {
            full_name: full_name,
            User_name : User_name,
            email: email           
        }
        return this.http.put(this.url+'/edit/'+User_id,body)

    }
}