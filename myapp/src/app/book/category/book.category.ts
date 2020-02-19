import { Component, OnInit } from '@angular/core';
import { UserHomePageService } from '../home.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    selector: 'book-category',
    templateUrl: 'book.category.html',
    styleUrls : ['book.category.css']
})

export class BookCategoryComponent implements OnInit {
    categories = []
    books = []
    constructor(private router : Router,
        private service : UserHomePageService) { 
            this.loadCategory()
        }

    ngOnInit() { }
    loadCategory()
    {
        this.service
        .getCategory()
        .subscribe(response => {
            if(response['status'] == 'Success')
            {
                this.categories = response['data']
                console.log(this.categories)
            }
        })
    }

    onSelect(category_id){
        this.service
        .getCategoryBooks(category_id)
        .subscribe(response => {
            if(response['status'] == 'Success')
            {
                this.books = response['data']
                console.log(this.books)
            }
        })

    }
    onSelect1(book_id:number){
        this.router.navigate(['/book-detail'+'/'+book_id])
    }
}