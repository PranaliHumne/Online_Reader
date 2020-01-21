import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/category/category.service';

@Component({
    selector: 'book-detail',
    templateUrl: 'book.detail.component.html',
    styleUrls: ['book.detail.component.css']
})

export class BookDetailsComponent implements OnInit 
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
    constructor(private router : Router,
        private categoryService: CategoryService,
        private bookService : BookService,
        private activatedRoute: ActivatedRoute) 
        {
            this.categoryService.getAllCategory()
            .subscribe(response =>{
                if (response['status'] == 'Success') {
                    this.categories = response['data']
                    this.category_id = this.categories[0].id
                  } else {
                    console.log(response['error'])
                  }
            })
            
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
}