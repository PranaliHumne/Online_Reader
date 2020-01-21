import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from '../category.service';
import * as toastr from 'toastr';



@Component({
    selector: 'category-edit',
    templateUrl: './category.edit.component.html',
    styleUrls: ['./category.edit.component.css']
})

export class CategoryEditComponent implements OnInit 
{
    category_title = ''
    categoryId = 0

    constructor(private router:Router,
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute) 
    {
        this.categoryId = this.activatedRoute.snapshot.params['id']       
        console.log(this.categoryId)
        if(this.categoryId)
        {
            this.categoryService
            .getCategoryDetails(this.categoryId)
            .subscribe(response =>{
                if(response['status'] == 'Success')
                {
                    const category = response['data']
                    this.category_title = category[0].category_title
                }
            })
        
        }

     }

    ngOnInit() { }

    onUpdate(){
        this.categoryService.updateCategory(this.category_title,this.categoryId)
        .subscribe(response =>{
            if (response['status'] == 'Success') {
            this.router.navigate(['/category-list'])
          } else {
            toastr.error(response['error'])
            console.log('error')
          }
        })
    }

    onReset()
    {
        this.categoryId = this.activatedRoute.snapshot.params['id']       
        console.log(this.categoryId)
        if(this.categoryId)
        {
            this.categoryService
            .getCategoryDetails(this.categoryId)
            .subscribe(response =>{
                if(response['status'] == 'Success')
                {
                    const category = response['data']
                    this.category_title = category[0].category_title
                }
            })
        
        }

    }

    onCancel(){
        this.router.navigate(['/book-list'])
    }
    
}