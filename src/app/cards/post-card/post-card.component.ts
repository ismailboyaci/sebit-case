import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/Models/post.model';



@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {

  @Input()
  posts!:Post

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
