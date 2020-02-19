import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LibraryService } from '../library.service';


@Component({
    selector: 'selector-name',
    templateUrl: './library.component.html',
    styleUrls: ['./library.component.css']
})

export class LibraryComponent implements OnInit {
    User_id = 0
    books = []
    constructor(private router : Router,
        private Service:LibraryService,
        private activatedRoute: ActivatedRoute) { 
            this.User_id = localStorage['User_id']
            console.log(this.User_id)
            this.showallLibraryBook()

        }
        

    ngOnInit() { }
    showallLibraryBook(){
        this.Service
        .getallBookInLibrary(this.User_id)
        .subscribe(response =>{
            console.log(response);
            if(response['status'] == 'Success'){
                this.books = response['data']
                console.log(this.books)
               // alert('register Successfully')
              // this.router.navigate(['/use'])
            }else{
                alert('error')
                console.log(response['error'])
            }
        })

    }

    onLike(book_id: number){
        this.Service
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

    onDelete(library_id:number){
        this.Service
        .DeleteBooks(library_id)
        .subscribe(response =>{
            if(response['status'] == 'Success')
            {
                alert('Deleted From Library')
                this.showallLibraryBook()
                //toastr.success('Added to library')
                console.log(this.User_id)
                console.log(response['data'])
            }
        })
     }
}