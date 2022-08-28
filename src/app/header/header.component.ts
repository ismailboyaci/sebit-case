import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  searchForm = new FormGroup({
    searchInput: new FormControl(null)
  });

  onSubmit() {
    //After the form is submitted, go to the route related to that value
    this.router.navigate([`search/${this.searchForm.value.searchInput}`])
    .then(()=>{
      window.location.reload()
    });
    this.searchForm = new FormGroup({
      searchInput: new FormControl(null)
    })

  }

}
