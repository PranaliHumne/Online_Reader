import { Component, OnInit } from '@angular/core';
import { UserHomePageService } from '../../home.service';
import { ActivatedRoute, Router } from '@angular/router';

import { PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
    selector: 'show-pdf',
    templateUrl: './show.book.component.html',
    styleUrls: ['show.book.component.css']
})

export class ShowPdfComponent implements OnInit {
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
                    console.log("show pdf:"+response)
                    if(response['status'] == 'Success')
                    {
                        this.book = response['data']
                        console.log(this.book[0].bookFile)
                    }else{
                        console.log(response['error'])
                    }
                })
                    
                
            }

        }
   
    ngOnInit() { }
}