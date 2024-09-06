import { Component, OnInit } from '@angular/core';
import { PostService } from '../../service/post.service';
import { Ipost } from '../../model/posts.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackbarService } from '../../service/snackbar.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  postObj !: Ipost  | undefined;
  postId !: string;

  constructor(
    private _postService: PostService,
    private _route: ActivatedRoute,
    private _router : Router,
    private _snackbar : SnackbarService
  ) { }

  ngOnInit(): void {
    this.getPost()
  }

  getPost() {
    this.postId = this._route.snapshot.params['postId']
    if (this.postId) {
      this._postService.fetchPost(this.postId).subscribe((res : Ipost) => {
        this.postObj =  res
        console.log(res)
      })
    }
  }

  onPostRemove(){
    let confirmatiom = confirm(`Are you sure do you want to remove post with id ${this.postId}`)
    if(confirmatiom){
      this._postService.removePost(this.postObj)
      .subscribe((res) => {
           let msg = res['message']
           this._snackbar.openSnackBar(msg);
           this._router.navigate(['posts'])
      })
    }
  }

}
