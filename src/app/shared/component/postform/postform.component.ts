import { Component, OnInit, Sanitizer } from '@angular/core';
import { PostService } from '../../service/post.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UuidService } from '../../service/uuid.service';
import { Ipost } from '../../model/posts.interface';
import { SnackbarService } from '../../service/snackbar.service';

@Component({
  selector: 'app-postform',
  templateUrl: './postform.component.html',
  styleUrls: ['./postform.component.scss']
})
export class PostformComponent implements OnInit {

  postForm !: FormGroup
  isInEditMode: boolean = false;
  postId !: string;
  postObj !: Ipost;

  userIdArr: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

  constructor(
    private _postService: PostService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _uuid: UuidService,
    private _snackBar :SnackbarService
  ) { }

  ngOnInit(): void {
    this.createPostForm()
    this.handlingEditMode()
  }

  createPostForm() {
    this.postForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      content: new FormControl(null, [Validators.required]),
      userId: new FormControl(null, [Validators.required]),
    })
  }

  handlingEditMode() {
    this.postId = this._route.snapshot.params['postId']
    if (this.postId) {
      this._postService.fetchPost(this.postId).subscribe((post: Ipost) => {
        this.postObj = post
        this.isInEditMode = true
        this.postForm.patchValue(this.postObj)
      })
    } else {
      this.isInEditMode = false
    }
  }

  getControls(control: string) {
    return this.postForm.get(control) as FormControl
  }

  onAddPost() {
    if (this.postForm.valid) {
        if(!this.isInEditMode){
          let newPost = { ...this.postForm.value, id: this._uuid.uuid() }
          console.log(newPost);
          this._postService.createPost(newPost)
            .subscribe(res => {
              let msg :string = res['message']
              this.postForm.reset()
              this._router.navigate(['posts'])
              this._snackBar.openSnackBar(msg)
            })
        }else{
          let updatedPost = {...this.postForm.value , id : this.postId}
          console.log(updatedPost);
          this._postService.updatePost(updatedPost)
            .subscribe((post) => {
              console.log(post);
              let msg :string = post['message']
              this.postForm.reset()
              this._router.navigate(['posts'])
              this._snackBar.openSnackBar(msg)
            })
        }
    }
  }

}

