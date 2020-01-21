import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../category.service';
import * as toaster  from 'toastr'

@Component({
    selector: 'Category-add',
    templateUrl: './category.add.component.html',
    styleUrls: ['./category.add.component.css']
})

export class CategoryAddComponent implements OnInit {
    category_title :''
    
    constructor(private router: Router,
        private categoryService: CategoryService) { }
        
        
    ngOnInit() { }

    onAdd(){
        console.log(this.category_title)
        this.categoryService.addCategory(this.category_title)
        .subscribe(response =>{
            console.log(response);
            if(response['status'] == 'Success'){
                //alert('register Successfully')
                toaster.success('added successfully')
                this.router.navigate(['/category-list'])
            }else{
                alert('error')
                console.log(response['error'])
                
            }
        })
    }
}