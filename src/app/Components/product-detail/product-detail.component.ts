import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  page;
  order;
  urun;
  constructor(private productService:ProductService,private activatedRoute: ActivatedRoute,private route:Router) { }

  ngOnInit() {
    this.page = this.activatedRoute.snapshot.queryParamMap.get("page");
    this.order = this.activatedRoute.snapshot.queryParamMap.get("order");
    this.urun=this.productService.getbyID(this.page);
  }
  git() { 
    this.route.navigate(["/product"]);
  }
}
