import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs';
import { Ipost } from '../model/posts.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  base_url = `${environment.base_url}`

  post_url = `${this.base_url}/posts`

  constructor(
    private _http : HttpClient
  ) { }

  fetchAllPostData() :Observable<Ipost[]>{
    return this._http.get<Ipost[]>(this.post_url)
    // return this._http.get<Ipost[]>(this.base_url + '/posts')
  }

  fetchPost(id : string) : Observable<Ipost> {
    const single_post_url = `${this.base_url}/posts/${id}`
    return this._http.get<Ipost>(single_post_url)
  }

  createPost(newPost : Ipost) : Observable<any> {
     return this._http.post<any>(this.post_url , newPost)
  }

  updatePost(updatePost : Ipost) : Observable<any>{
       const update_post_url = `${this.base_url}/posts/${updatePost.id}`

       return this._http.patch<any>(update_post_url , updatePost)
  }

  removePost(removePost : Ipost | undefined) : Observable<{message : string}> {
    const delete_post_url = `${this.base_url}/posts/${removePost?.id}`

    return this._http.delete<{message : string}>(delete_post_url)
  }
  

}
