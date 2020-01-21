import {Injectable} from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class UserHomePageService{
    User_id = 0
    url = 'http://localhost:4000'

    constructor(private http: HttpClient) {}


    getallBooks(){
        return this.http.get(this.url+'/books')
    }
     getBookDetails(book_id : number){
        return this.http.get(this.url+'/books/details/'+book_id)
    }
    getBook(book_id:number){
        return this.http.get(this.url+'/books/getbookId/'+book_id)
    }

    addBooktoLibrary(book_id:number,User_id:number){
        const body = {
            User_id : User_id,
            //book_id: book_id
        }

        return this.http.post(this.url+'/library/user'+'/'+book_id,body)
    }

}
