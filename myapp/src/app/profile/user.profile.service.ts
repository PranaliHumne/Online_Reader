import {Injectable} from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class UserProfileServie{
    url = 'http://localhost:4000/users'

    constructor(private http: HttpClient,
        private router:Router){} 
        
}