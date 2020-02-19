import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfileServie } from '../user.profile.service';


@Component({
    selector: 'user-register',
    templateUrl: './profile.component.html',
    styleUrls:  ['./profile.component.css']
})

export class EditProfileComponent implements OnInit {
    full_name = ''
    email = ''
    User_name = ''
    password = ''
    Confirm_password = ''
    User_id = 0
    
    constructor(private router : Router,
        private service : UserProfileServie) {
            this.User_id = localStorage['User_id']

            if(this.User_id)
            {
                this.service
                .getUserDetails(this.User_id)
                .subscribe(response => {
                    if(response['status'] == 'Success')
                    {
                        const user = response['data']
                        console.log(user)
                        this.User_name = user[0].User_name
                        this.email = user[0].email
                        this.full_name = user[0].full_name
                        this.password = user[0].password

                    }
                })
            }

         }

    ngOnInit() { }

    

    onEdit() {
        console.log("Inside Register");
        if(this.full_name.length == 0){
            alert('enter valid username')
        }else if(this.User_name.length == 0)
        {
            alert('enter valid UserName')
        }else if(this.email.length == 0){
            alert('enter valid email')
        }else if(this.password.length == 0){
            alert('enter valid password')
        }
        //else if(this.password != this.Confirm_password){
        //     alert('password not match')
        // }
        else{
            this.service.editProfile(this.full_name,this.User_name,this.email,this.password,this.User_id)
            .subscribe(response =>{
                console.log(response)
                if(response['status'] == 'Success'){
                    alert('register Successfully')
                }else{
                    alert('error')
                    console.log(response['error'])
                }
            })
        }

    }
}