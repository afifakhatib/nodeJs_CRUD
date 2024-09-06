import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostdashComponent } from './shared/component/postdash/postdash.component';
import { PostscardComponent } from './shared/component/postscard/postscard.component';
import { PostComponent } from './shared/component/post/post.component';
import { PostformComponent } from './shared/component/postform/postform.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './shared/component/home/home.component'
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './shared/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    PostdashComponent,
    PostscardComponent,
    PostComponent,
    PostformComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
