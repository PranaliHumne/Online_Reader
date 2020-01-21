import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/category/category.service';
import { BookService } from '../book.service';
import * as toastr from 'toastr';


@Component({
    selector: 'book-edit',
    templateUrl: 'book.edit.component.html',
    styleUrls: ['book.edit.component.css']

})

export class BookEditComponent implements OnInit {
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
    bookFile : any

    bookId = 0


    constructor(private router: Router,
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
                this.bookService
                .getBookDetails(this.bookId)
                .subscribe(response =>{
                    if(response['status'] == 'Success')
                    {
                        const book = response['data']
                        console.log(book)
                        this.book_name = book[0].book_name
                        this.auther_name = book[0].auther_name
                        this.category_id = book[0].category_id
                        this.part = book[0].part
                        this.publish_date = book[0].publish_date
                        this.rating = book[0].rating
                        this.status = book[0].status
                        this.descripation = book[0].descripation
                        this.thumbnail = book[0].thubmnail
                        
                    }
                })
            }

         }

    ngOnInit() {
        this.onUpdate()
     }

    onFileChange(event) {
        this.thumbnail = event.target.files[0]
      }
      onbookFile(event){
        this.bookFile = event.target.files[1]
      }0

    onUpdate(){
        this.bookService.UpdateBooks(this.book_name,this.auther_name,this.category_id,this.part,this.publish_date,this.rating,this.status,this.descripation,this.bookId,this.thumbnail,this.thumbnail)
        .subscribe(response =>{
            if (response['status'] == 'Success') {
                this.router.navigate(['/book-list'])
              } else {
                toastr.error(response['error'])
                console.log('error')
              }
        })
    }

    onReset()
    {
        this.bookId = this.activatedRoute.snapshot.params['id']
            console.log(this.bookId)
            if(this.bookId)
            {
                this.bookService
                .getBookDetails(this.bookId)
                .subscribe(response =>{
                    if(response['status'] == 'Success')
                    {
                        const book = response['data']
                        console.log(book)
                        this.book_name = book[0].book_name
                        this.auther_name = book[0].auther_name
                        this.category_id = book[0].category_id
                        this.part = book[0].part
                        this.publish_date = book[0].publish_date
                        this.rating = book[0].rating
                        this.status = book[0].status
                        this.descripation = book[0].descripation
                        this.thumbnail = book[0].thubmnail
                        this.bookFile = book[0].bookFile
                        
                    }
                })
         }
    }


    onCancel(){
        this.router.navigate(['/book-list'])
    }
     
}