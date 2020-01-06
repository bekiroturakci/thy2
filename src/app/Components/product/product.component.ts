import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Entities/Product';
import { ProductService } from 'src/app/Services/product.service';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[];
  posts;
  keyword:string="dolor";
  constructor(private productService: ProductService,private http:HttpClient) { }

  ngOnInit() {
    this.products = this.productService.getAll();
    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe(data=>this.posts=data);
  }
  getAllPosts() {
   return this.posts.filter(f=>f.title.indexOf(this.keyword)!=-1);
  }
}
