import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../Models/category.model'
import { Post } from '../Models/post.model';


@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {

  categoryId: string | null = ''
  postsObj!: Post[];
  category!: Category;
  postNumber: number = 0

  constructor(
    private route: ActivatedRoute,
    private httpClient: HttpClient

  ) { }

  ngOnInit(): void {
    //get categoryId  by redirected url
    this.categoryId = this.route.snapshot.paramMap.get('categoryid')

    //get category information by redirected url
    this.httpClient.get('assets/data/categories.json').subscribe((response: any) => {
      if (this.categoryId) {
        // index number starts 0 but
        this.category = response.categories[Number(this.categoryId) - 1]
      }
    })
    //pulling posts by category
    this.httpClient.get('assets/data/posts.json').subscribe((response: any) => {
      this.postsObj = response.posts.filter((x: { category_id: string | null; }) => x.category_id == this.categoryId)

      //how many posts in this category
      this.postNumber = this.postsObj.length

    })
  }

  //sorting the given posts by date
  get sortByDate() {
    if (this.postsObj) {
      return this.postsObj.sort((a: any, b: any) => {
        return <any>new Date(b.date) - <any>new Date(a.date);
      });
    }
    return this.postsObj
  }
}
