import { Component, OnInit } from '@angular/core';
import { UserProfileServie } from './user.profile.service';
import { Router } from '@angular/router';


@Component({
    selector: 'user-profile',
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.css']
})

export class UserProfileComponent implements OnInit {
    full_name = ''
    email = ''
    User_name = ''
    User_id = 0
    user = []

    constructor(private router : Router,
        private service : UserProfileServie) {
            this.User_id = localStorage['User_id']
            this.onEdit()
         }

    ngOnInit() { }

    onEdit(){
        this.service
        .editProfile(this.full_name,this.email,this.User_name,this.User_id)
        .subscribe(response =>{
            console.log(response);
            if(response['status'] == 'Success'){
                alert('Profile Updated Successfully')
                const user = response['data']

            }else{
                alert('error')
                console.log(response['error'])
            }
        })
    }
}