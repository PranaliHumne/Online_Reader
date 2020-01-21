import { Component, OnInit } from '@angular/core';
import { UserHomePageService } from '../../home.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    selector: 'show-pdf',
    templateUrl: './show.book.component.html',
    styleUrls: ['show.book.component.css']
})

export class ShowPdfComponent implements OnInit {
   books = []
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
    book_id = 0
    constructor(private service : UserHomePageService,
        private activatedRoute: ActivatedRoute,
        private router : Router)
     { 
       
        this.book_id = this.activatedRoute.snapshot.params['id'] 
            console.log(this.book_id)
            
            if(this.book_id)
            {
                this.service.getBookDetails(this.book_id)
                .subscribe(response =>{
                    if(response['status'] == 'Success')
                    {
                        this.books = response['data']
                        console.log(this.books)
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
                        
                    }else{
                        console.log(response['error'])
                    }
                })
                    
                
            }

        }
   
    ngOnInit() { }
}