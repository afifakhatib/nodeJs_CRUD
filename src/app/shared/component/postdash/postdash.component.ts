import { Component, OnInit } from '@angular/core';
import { PostService } from '../../service/post.service';
import { Ipost } from '../../model/posts.interface';
import { log } from 'console';

@Component({
  selector: 'app-postdash',
  templateUrl: './postdash.component.html',
  styleUrls: ['./postdash.component.scss']
})
export class PostdashComponent implements OnInit {

  postsArr !: Ipost[] 

  constructor(
    private _postService : PostService
  ) { }

  ngOnInit(): void {
     this.getPostsData()
  }

  getPostsData(){
      this._postService.fetchAllPostData()
         .subscribe((data : Ipost[]) => {
            this.postsArr = data
            // console.log(data)
         })
  }
}
