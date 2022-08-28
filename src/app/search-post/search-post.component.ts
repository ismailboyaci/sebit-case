import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../Models/post.model';

@Component({
  selector: 'app-search-post',
  templateUrl: './search-post.component.html',
  styleUrls: ['./search-post.component.css']
})
export class SearchPostComponent implements OnInit {

  searchInput:string|null=''
  filteredPosts!: Post[];
  tags:Array<any>=['foo','bar','baz']

  constructor(
    private router : ActivatedRoute,
    private httpclient : HttpClient
    ) { }

  ngOnInit(): void {
    //get input value from url
   this.searchInput = this.router.snapshot.paramMap.get('searchInput')

   //search by input value in posts
   this.httpclient.get('assets/data/posts.json').subscribe((response:any)=>{
    this.filteredPosts=response.posts.filter((x: { description: string; title:string; author:string }) =>
    x.description.toLowerCase().includes((this.searchInput!).toLowerCase()) ||
    x.title.toLowerCase().includes((this.searchInput!).toLowerCase()) ||
    x.author.toLowerCase().includes((this.searchInput!).toLowerCase())
    )
    //sorting the fıltered posts by date
    this.filteredPosts=this.filteredPosts.sort((objA, objB) =><any>new Date(objB.date) - <any>new Date(objA.date),
    );

   })
  }



}
