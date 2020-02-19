import {Injectable} from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class LibraryService
{

    constructor(private http: HttpClient) {}
    url = 'http://localhost:4000/'

   
    getallBookInLibrary(User_id:number){
        return this.http.get(this.url+'library/'+User_id)
    }

    addBooktoLibrary(book_id:number,User_id:number){
        const body = {
            User_id : User_id
        }

        return this.http.post(this.url+'library/book_id',body)
    }
    addLike(book_id : number)
    {
        const body = {

        }
        return this.http.post(this.url+'like/likes/'+book_id,body)
    }

    DeleteBooks(library_id : number)
    {
        
        return this.http.delete(this.url+'library/'+library_id)
    }


}
