import { Component, OnInit } from '@angular/core';
import { UserHomePageService } from '../home.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as toastr from 'toastr'



@Component({
    selector: 'user-home-page',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class UserHomeComponent implements OnInit {
    books = []
    User_id = 0
    likes = []
    like_count 

    constructor(private router : Router,
        private userHoemePageservice : UserHomePageService)
     {
        this.showAllbooks()
        this.User_id = localStorage['User_id']
            console.log(this.User_id)       

     }

    ngOnInit() { }



    showAllbooks(){
        this.userHoemePageservice
        .getallBooks()
        .subscribe(response =>{
            if(response['status']=='Success')
            {
                toastr.success('added to Library')
                this.books = response['data']
                console.log(this.books)
            }
            else
            {
                console.log(response['error'])
            }
         
        })
    }


    onSelect(book_id:number){
        console.log('inside seect')
        this.userHoemePageservice
        .addBooktoLibrary(book_id,this.User_id)
        .subscribe(response =>{
            if(response['status'] == 'Success')
            {
                alert('added to Library')
                //toastr.success('Added to library')
                console.log(this.User_id)
                console.log(response['status'])
            }
        })   
        
    }
   

    onSelect1(book_id:number){
        this.router.navigate(['/book-detail'+'/'+book_id])
    }
    onSelect2(book_id:number){
        this.router.navigate(['/show-pdf'+'/'+book_id])
    }

    onLike(book_id: number){
        this.userHoemePageservice
        .addLike(book_id)
        .subscribe(response =>{
            if(response['status'] == 'Success')
            {
                alert('Like')
                //toastr.success('Added to library')
                console.log(this.User_id)
                console.log(response['data'])
            }
        })   
    }

    
}