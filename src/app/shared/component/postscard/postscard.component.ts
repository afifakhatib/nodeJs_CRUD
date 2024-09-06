import { Component, Input, OnInit } from '@angular/core';
import { Ipost } from '../../model/posts.interface';

@Component({
  selector: 'app-postscard',
  templateUrl: './postscard.component.html',
  styleUrls: ['./postscard.component.scss']
})
export class PostscardComponent implements OnInit {

  @Input() postObj !: Ipost

  constructor() { }

  ngOnInit(): void {
  }

}
