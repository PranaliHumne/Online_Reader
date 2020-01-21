import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import * as toaster from 'toastr'
@Component({
    selector: 'users-list',
    templateUrl: 'user.list.component.html',
    styleUrls: ['user.list.component.css']
})

export class UserListComponent implements OnInit {
    users = []

    constructor(private router: Router,
        private usersService: UsersService) { 
         this.getUsers()
        }

    ngOnInit() { }

    getUsers(){
        this.usersService.getAllUser()
       .subscribe(response =>{
           if(response['status'] == 'Success')
           {
               this.users = response['data']
           }
           else
           {
               console.log(response['error'])
           }
       })
    }

    DeleteUser(User_id: number){
        this.usersService.DeleteUser(User_id)
        .subscribe(response =>{
            if(response['status'] == 'Success')
            {
                toaster.Success('Deleted Successfully')
            }
            else{
                console.log(response['error'])
                toaster.error('Error')
            }
        })
    }
    
}