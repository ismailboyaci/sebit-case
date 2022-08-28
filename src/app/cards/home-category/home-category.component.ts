import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/Models/category.model';

@Component({
  selector: 'app-home-category',
  templateUrl: './home-category.component.html',
  styleUrls: ['./home-category.component.css']
})
export class HomeCategoryComponent implements OnInit {

  @Input()categoryData!: Category;

  constructor() { }

  ngOnInit(): void {
  }

}
