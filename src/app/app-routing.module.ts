import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { ProductComponent } from './Components/product/product.component';
import { PostDetailComponent } from './Components/post-detail/post-detail.component';
import { ProductDetailComponent } from './Components/product-detail/product-detail.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"product",component:ProductComponent},
  {path:"post/detail/:id",component:PostDetailComponent},
  {path:"product/detail",component:ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
