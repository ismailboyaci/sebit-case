import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  postid:any
  postObj:any
  tags:Array<any>=['foo','bar','baz']

  constructor(
    private route : ActivatedRoute,
    private httpClient : HttpClient
  ) { }

  ngOnInit(): void {
    //get post id from url
    this.postid=this.route.snapshot.paramMap.get('postid')
    //get the post according to the received post id number
    this.httpClient.get('assets/data/posts.json').subscribe((response:any)=>{
      this.postObj=response.posts[Number(this.postid)-1]
    })
  }

}
