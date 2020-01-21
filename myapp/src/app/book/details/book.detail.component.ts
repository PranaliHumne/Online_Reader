import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserHomePageService } from '../home.service';


@Component({
    selector: 'book-details',
    templateUrl: 'book.detail.component.html',
    styleUrls: ['book.detail.component.css']
})

export class bookDetailComponent implements OnInit 
{
    book:any
    categories = []
    book_name =''
    auther_name = ''
    category_id:number
    part = 0
    publish_date = ''
    rating = 0
    status =''
    descripation = ''
    thumbnail:any
    bookId = 0
    User_id = 0
    constructor(private router : Router,
        private bookService : UserHomePageService,
        private activatedRoute: ActivatedRoute) 
        {
            this.User_id = localStorage['User_id']
            console.log(this.User_id)
            
            this.bookId = this.activatedRoute.snapshot.params['id'] 
            console.log(this.bookId)
            
            if(this.bookId)
            {
                this.bookService.getBookDetails(this.bookId)
                .subscribe(response =>{
                    if(response['status'] == 'Success')
                    {
                        this.book = response['data']
                        console.log(this.book)
                        // const book = response['data']
                        // console.log(book)
                        // this.book_name = book[0].book_name
                        // this.auther_name = book[0].auther_name
                        // this.category_id = book[0].category_id
                        // this.part = book[0].part
                        // this.publish_date = book[0].publish_date
                        // this.rating = book[0].rating
                        // this.status = book[0].status
                        // this.descripation = book[0].descripation
                        // this.thumbnail = book[0].thubmnail
                        
                    }
                })
                    
                
            }

        }

    ngOnInit() { }
    onSelect(book_id:number){
        this.router.navigate(['/book-edit'+'/'+this.bookId])
    }
    onSelect1(book_id:number){
        console.log('inside seect')
        this.bookService
        .addBooktoLibrary(book_id,this.User_id)
        .subscribe(response =>{
            if(response['status'] == 'Success')
            {
                console.log(this.User_id)
                console.log(response['status'])
            }
        })   
        
    }
}