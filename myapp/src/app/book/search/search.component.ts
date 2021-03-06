import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserHomePageService } from '../home.service';


@Component({
    selector: 'search-book',
    templateUrl: 'search.component.html',
    styleUrls : ['search.component.css']
})

export class SearchBookComponent implements OnInit {
    book_name = ''
    book = []
    book_id = 0
    constructor(private router : Router,
       private service : UserHomePageService  ) { 
       }

    ngOnInit() { 
    }

    loadSearchBook(){
        if(this.book_name.length >= 0)
           {
               console.log(this.book_name)
           this.service
           .searchBooks(this.book_name)
           .subscribe(response =>{
            if(response['status'] == 'Success'){
                this.book = response['data']
                console.log(this.book)
                this.book_name = this.book_name
            }else{
                alert('error')
                console.log(response['error'])
            }
        })
        }
    }
    onSelect1(book_id:number){
        this.router.navigate(['/book-detail'+'/'+book_id])
      
    }
    
}