import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostdashComponent } from './shared/component/postdash/postdash.component';
import { PostComponent } from './shared/component/post/post.component';
import { HomeComponent } from './shared/component/home/home.component';
import { PostformComponent } from './shared/component/postform/postform.component';

const routes: Routes = [
  {
    path : '',
    component : HomeComponent
  },
  {
    path  : 'home',
    component : HomeComponent
  },
  {
    path : 'posts',
    component : PostdashComponent
  },
  {
    path : 'posts/addPost',
    component : PostformComponent
  },
  {
    path : 'posts/:postId',
    component : PostComponent
  },
  {  
     path : 'posts/:postId/editPost',
     component : PostformComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
