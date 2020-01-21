import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CategoryService{
    url = 'http://localhost:4000/categories'

    constructor(private http: HttpClient){}

    getAllCategory()
    {
        return this.http.get(this.url)
    }

    addCategory(category_title:string){
        const body ={
            category_title: category_title
        }
        return this.http.post(this.url,body)
    }
    deleteCategory(category_id){
        return this.http.delete(this.url + '/'+category_id)
    }
    
    getCategoryDetails(category_id : number){
        return this.http.get(this.url+'/details/'+category_id)
    }

    updateCategory(category_title:String,category_id : number)
    {
        const body ={
            category_title: category_title
        }
        return this.http.put(this.url+'/'+category_id,body)
    }
}