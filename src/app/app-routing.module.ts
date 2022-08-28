import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { SearchPostComponent } from './search-post/search-post.component';
import { ViewPostComponent } from './view-post/view-post.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'home'},
  {path:'home',component:HomeComponent},
  {path:'view-post/:categoryid',component: ViewPostComponent},
  {path:'post/:postid',component: PostDetailComponent},
  {path:'search/:searchInput',component: SearchPostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
