import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Categories } from '../Models/category.model';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categoriesData: Categories[] = [];

  constructor(
    private httpclient : HttpClient
  ) { }

  ngOnInit(): void {
    //get categories from categories,json file and assign to categoriesData
   this.httpclient.get('assets/data/categories.json').subscribe((response:any)=>{
    this.categoriesData=response['categories']
   })
  }

}
