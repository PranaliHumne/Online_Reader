import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import * as toaster  from 'toastr';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
    selector: 'category',
    templateUrl: './category.list.component.html',
    styleUrls: ['./category.list.component.css']
})

export class CategoryListComponent implements OnInit {
    categories : any[]
    constructor(private categoryService: CategoryService,
        private router: Router) { 
        this.getAllCAtegory()
    }

    ngOnInit() { }
    getAllCAtegory(){
        this.categoryService.getAllCategory().subscribe(response =>{
            if(response['status'] == 'Success')
           {
               this.categories = response['data']
           }
           else
           {
               console.log(response['error'])
           }
        })
    }
    onDelete(category_id: number){
        this.categoryService.deleteCategory(category_id)
        .subscribe(response =>{
            if(response['status'] == 'Success')
           {
            toaster.success('deleted successfully')
            this.getAllCAtegory()
            console.log('data')
           }
           else
           {
              toaster.error('error')
              console.log(response['error']);
                
           }

        })
    }

    onSelect(category_id:number){
        this.router.navigate(['/category-edit'+'/'+category_id])
    }
}