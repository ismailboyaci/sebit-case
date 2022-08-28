import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

//components
import { HomeComponent } from './home/home.component';
import { HomeCategoryComponent } from './cards/home-category/home-category.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { PostCardComponent } from './cards/post-card/post-card.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { HeaderComponent } from './header/header.component';
import { SearchPostComponent } from './search-post/search-post.component';

//angular material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';

//services
import { HttpClientModule} from '@angular/common/http';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeCategoryComponent,
    ViewPostComponent,
    PostCardComponent,
    PostDetailComponent,
    HeaderComponent,
    SearchPostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    HttpClientModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
