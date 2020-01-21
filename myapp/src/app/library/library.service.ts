import {Injectable} from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class LibraryService
{

    constructor(private http: HttpClient) {}
    url = 'http://localhost:4000/library'

   
    getallBookInLibrary(User_id:number){
        return this.http.get(this.url+'/'+User_id)
    }

    addBooktoLibrary(book_id:number,User_id:number){
        const body = {
            User_id : User_id
        }

        return this.http.post(this.url+'/book_id',body)
    }


}
